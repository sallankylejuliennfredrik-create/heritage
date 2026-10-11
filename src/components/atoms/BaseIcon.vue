<template>
  <span
    class="base-icon"
    :aria-hidden="ariaHidden"
  >
    {{ icon }}
  </span>
</template>

<script>
export default {
  name: 'BaseIcon',

  props: {
    icon: {
      type: String,
      required: true
    },

    ariaHidden: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.base-icon {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  line-height: 1;
}
</style>