import { ZodError } from 'zod'
import { createTextValidator } from '~/utils/validators'

export default defineEventHandler(async (event) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const body = await readValidatedBody(event, data => createTextValidator.parseAsync(data).catch((error) => {
    if (error instanceof ZodError)
      throw createError({
        status: 400,
        message: 'Invalid data',
        data: error.errors[0].message,
      })
  }))

  // Save in the database...

  return sendNoContent(event, 201)
})
