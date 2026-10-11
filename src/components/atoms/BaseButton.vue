<template>
  <button
    :type="type"
    class="base-button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style scoped>

.base-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-height: 42px;

  padding:
    0 18px;

  border: none;

  border-radius: 10px;

  background:
    var(--color-primary);

  color: white;

  font-size: 0.9rem;

  font-weight: 700;

  white-space: nowrap;

  box-shadow:
    0 4px 10px
    rgba(23, 107, 77, 0.18);

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
}


.base-button:hover {
  background:
    var(--color-primary-dark);

  transform:
    translateY(-2px);

  box-shadow:
    0 7px 16px
    rgba(23, 107, 77, 0.24);
}


.base-button:active {
  transform:
    translateY(0);
}


.base-button:focus-visible {
  outline:
    3px solid
    rgba(217, 154, 50, 0.8);

  outline-offset: 3px;
}

</style>