export default defineEventHandler(async (event) => {
  const formData = await readFormData(event)

  const image = formData.get('image') as Blob
  ensureBlob(image, {
    maxSize: '1MB',
    types: ['image/png', 'image/jpeg', 'image/jpg'],
  })

  // Save the image to a database or a file system

  return sendNoContent(event, 201)
})
