<script lang="ts" setup>
import { ZodError } from 'zod'

const props = defineProps<{
  endpoint: string
}>()

const schema = createTextValidator

const state = reactive({
  name: '',
})

async function onSubmit() {
  try {
    const data = schema.parse(state)
    await $fetch(props.endpoint, {
      method: 'post',
      body: data,
    })
  }
  catch (error) {
    if (error instanceof ZodError) {
      throw createError({
        status: 400,
        message: 'Invalid data',
        data: error.errors,
      })
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit()">
    <input
      v-model="state.name"
      type="text"
      placeholder="Name"
    >

    <button type="submit">
      Create Tag
    </button>
  </form>
</template>
