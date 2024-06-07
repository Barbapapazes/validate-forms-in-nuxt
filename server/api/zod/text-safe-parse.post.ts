import { createTextValidator } from '~/utils/validators'

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, createTextValidator.safeParse)

  if (!result.success) {
    throw createError({
      status: 400,
      message: 'Invalid data',
      data: result.error.errors[0].message,
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const body = result.data
  // Save in the database...

  return sendNoContent(event, 201)
})
