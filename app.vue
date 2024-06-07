<script lang="ts" setup>
</script>

<template>
  <div>
    <h1>Validate Forms with Nuxt</h1>

    <h2>
      Create a tag with Zod on the client and the server
    </h2>
    <p>
      Use parse async on the server
    </p>
    <ZodTextForm endpoint="/api/zod/text-parse-async" />
    <p>
      Use safe parse on the server
    </p>
    <ZodTextForm endpoint="/api/zod/text-safe-parse" />

    <h2>
      Upload an image with Zod on the client and the server
    </h2>
    <ZodImageForm endpoint="/api/zod/image" />

    <h2>
      Upload an image with Zod on the client and NuxtHub on the server
    </h2>
    <ZodImageForm endpoint="/api/nuxthub/image" />

    <h2>
      Upload an image and text with Zod on the client and the server
    </h2>
    <ZodTextImageForm endpoint="/api/zod/text-image" />
  </div>
</template>
