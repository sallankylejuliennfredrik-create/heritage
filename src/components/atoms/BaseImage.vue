<template>

  <img
    :src="src"
    :alt="alt"
    class="base-image"
    loading="lazy"
  />

</template>

<script>

export default {

  name: 'BaseImage',

  props: {

    src: {
      type: String,
      required: true
    },

    alt: {
      type: String,
      default: ''
    }

  }

}

</script>

<style scoped>

.base-image {
  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;
}

</style>