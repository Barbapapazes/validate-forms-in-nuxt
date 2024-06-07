<script lang="ts" setup>
const props = defineProps<{
  endpoint: string
}>()

async function onSubmit(event: Event) {
  const target = event.target as HTMLFormElement
  const formData = new FormData(target)

  const name = formData.get('name')
  const image = formData.get('image')
  try {
    await createValidator.parseAsync({ name, image })

    await $fetch(props.endpoint, {
      method: 'POST',
      body: formData,
    })
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <form
    enctype="multipart/form-data"
    @submit.prevent="onSubmit($event)"
  >
    <input
      type="text"
      name="name"
      placeholder="Name"
    >
    <input
      type="file"
      name="image"
      accept="image/png, image/jpeg, image/jpg"
    >
    <button type="submit">
      Submit Text and Image
    </button>
  </form>
</template>
