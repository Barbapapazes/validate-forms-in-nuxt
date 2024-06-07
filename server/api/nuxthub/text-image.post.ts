import { createTextValidator } from '~/utils/validators'

export default defineEventHandler(async (event) => {
  const formData = await readFormData(event)

  const name = formData.get('name')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = await createTextValidator.parseAsync({ name }).catch((error) => {
    throw createError({
      status: 400,
      message: 'Invalid data',
      data: error.errors[0].message,
    })
  })

  // Save the text in the database...

  const image = formData.get('image') as Blob
  ensureBlob(image, {
    maxSize: '1MB',
    types: ['image/png', 'image/jpeg', 'image/jpg'],
  })

  // Save the image to a database or a file system

  return sendNoContent(event, 201)
})
