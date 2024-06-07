import { any, object, string } from 'zod'

export const createTextValidator = object({
  name: string({ message: 'Required' }),
})

export const createImageValidator = object({
  image: any().refine(image => image instanceof File, { message: 'Image must be a file' })
    .refine(image => image.size < 1024 * 1024, { message: 'Image must be less than 1MB' })
    .refine(image => image.type.startsWith('image/'), { message: 'Image must be an image' })
    .refine(image => ['image/png', 'image/jpeg', 'image/jpg'].includes(image.type), { message: 'Image must be a JPEG or PNG' }),
})

export const createValidator = createTextValidator.merge(createImageValidator)
