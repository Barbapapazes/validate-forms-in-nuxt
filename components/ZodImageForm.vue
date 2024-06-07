<script lang="ts" setup>
import { ZodError } from 'zod'

const props = defineProps<{
  endpoint: string
}>()

async function onSubmit(event: Event) {
  const target = event.target as HTMLFormElement
  const formData = new FormData(target)

  const image = formData.get('image')
  try {
    await createImageValidator.parseAsync({ image })

    await $fetch(props.endpoint, {
      method: 'POST',
      body: formData,
    })
  }
  catch (error) {
    console.error(error)
    if (error instanceof ZodError) {
      alert(error.message)
    }
  }
}
</script>

<template>
  <form
    enctype="multipart/form-data"
    @submit.prevent="onSubmit($event)"
  >
    <input
      type="file"
      name="image"
      accept="image/png, image/jpeg, image/jpg"
    >
    <button type="submit">
      Submit Image
    </button>
  </form>
</template>
