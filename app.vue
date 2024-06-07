<script lang="ts" setup>
async function onImageSubmit(event: Event) {
  const target = event.target as HTMLFormElement;
  const formData = new FormData(target);

  await $fetch('/api/image', {
    method: 'POST',
    body: formData,
  })
}
</script>

<template>
  <div>
    <h1>Validate Forms with Nuxt</h1>

    <h2>
      Image
    </h2>
    <form @submit.prevent="onImageSubmit($event)" enctype="multipart/form-data">
      <input type="file" name="image" accept="image/png, image/jpeg, image/jpg" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
