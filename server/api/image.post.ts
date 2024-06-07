import { any, object } from "zod";

export default defineEventHandler(async (event) => {
  const formData = await readFormData(event)

  const image = formData.get('image')
  await object({
    image: any().refine((image) => image instanceof File, { message: 'Image must be a file' })
    .refine((image) => image.size < 1024 * 1024, { message: 'Image must be less than 1MB' })
    .refine((image) => image.type.startsWith('image/'), { message: 'Image must be an image' })
    .refine((image) => ['image/jpeg', 'image/png'].includes(image.type), { message: 'Image must be a JPEG or PNG' })
  }).parseAsync({ image }).catch((error) => {
    throw createError({
      status: 400,
      message: 'Invalid image',
      data: error.errors[0].message
    })
  })

  // Save the image to a database or a file system

  return sendNoContent(event, 201)
});
