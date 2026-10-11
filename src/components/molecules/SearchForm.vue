<template>

  <form
    class="search-form"
    @submit.prevent="submitSearch"
  >

    <label
      for="heritage-search"
      class="sr-only"
    >
      Search heritage sites
    </label>

    <div class="search-input">


      <input
        id="heritage-search"
        v-model="query"
        type="search"
        placeholder="Search places..."
      />

    </div>

    <BaseButton type="submit">
      Search
    </BaseButton>

  </form>

</template>

<script>

import BaseButton from '../atoms/BaseButton.vue'

export default {

  name: 'SearchForm',

  components: {
    BaseButton
  },

  data() {

    return {
      query: ''
    }

  },

  methods: {

    submitSearch() {

      const search =
        this.query.trim()

      if (!search) {
        return
      }

      this.$router.push({
        path: '/',
        query: {
          search
        }
      })

    }

  }

}

</script>

<style scoped>

.search-form {

  display: flex;

  align-items: center;

  gap: 8px;

  margin-left: auto;

}


.search-input {

  position: relative;

}


.search-icon {

  position: absolute;

  left: 11px;

  top: 50%;

  transform:
    translateY(-50%);

  font-size: 0.85rem;

  pointer-events: none;

}


.search-input input {

  width: 190px;

  height: 40px;

  padding:
    0 12px 0 34px;

  border:
    1px solid #dfe4e1;

  border-radius: 10px;

  background: #f8faf9;

  color: var(--color-text);

  outline: none;

}


.search-input input:focus {

  border-color:
    var(--color-primary);

  box-shadow:
    0 0 0 3px
    rgba(23, 107, 77, 0.12);

}


.sr-only {

  position: absolute;

  width: 1px;

  height: 1px;

  padding: 0;

  margin: -1px;

  overflow: hidden;

  clip: rect(0, 0, 0, 0);

  white-space: nowrap;

  border: 0;

}


@media (max-width: 600px) {

  .search-input input {

    width: 140px;

  }

  .search-form
  :deep(.base-button) {

    display: none;

  }

}

</style>