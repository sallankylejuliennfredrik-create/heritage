<template>
  <component
    :is="tag"
    :class="`typography typography--${variant}`"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseTypography',

  props: {
    tag: {
      type: String,
      default: 'p'
    },

    variant: {
      type: String,
      default: 'body'
    }
  }
}
</script>

<style scoped>
.typography {
  margin: 0;
}

.typography--heading {
  font-size: clamp(2rem, 5vw, 3.5rem);

  line-height: 1.1;

  font-weight: 700;
}

.typography--subheading {
  font-size: 1.4rem;

  line-height: 1.3;

  font-weight: 700;
}

.typography--body {
  font-size: 1rem;

  line-height: 1.7;
}
</style>