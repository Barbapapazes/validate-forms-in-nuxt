import { ZodError } from 'zod'
import { createImageValidator } from '~/utils/validators'

export default defineEventHandler(async (event) => {
  const formData = await readFormData(event)

  const image = formData.get('image')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = await createImageValidator.parseAsync({ image }).catch((error: Error) => {
    if (error instanceof ZodError)
      throw createError({
        status: 400,
        message: 'Invalid image',
        data: error.errors[0].message,
      })
  })

  // Save the image to a database or a file system

  return sendNoContent(event, 201)
})
