<template>
  <header class="header">

    <div class="header__container">

      <!-- Logo / Brand -->
      <router-link
        to="/"
        class="brand"
        aria-label="Pangasinan Heritage Home"
      >
        <span class="brand__title">
          Pangasinan Heritage
        </span>
      </router-link>


      <!-- Navigation -->
      <nav
        class="navigation"
        aria-label="Main navigation"
      >

        <NavigationItem
          to="/"
          label="Home"
        />

        <NavigationItem
          to="/#heritage"
          label="Heritage Sites"
        />

      </nav>


      <!-- Search -->
      <SearchForm />

    </div>

  </header>
</template>

<script>
import NavigationItem from '../molecules/NavigationItem.vue'
import SearchForm from '../molecules/SearchForm.vue'

export default {
  name: 'HeaderNavigation',

  components: {
    NavigationItem,
    SearchForm
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: var(--color-surface);

  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.header__container {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 12px 16px;

  display: flex;
  align-items: center;
  gap: 24px;
}

.brand {
  color: var(--color-primary);

  text-decoration: none;

  font-weight: 700;

  white-space: nowrap;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header__container > :last-child {
  margin-left: auto;
}

@media (max-width: 768px) {
  .header__container {
    flex-wrap: wrap;
  }

  .navigation {
    order: 3;

    width: 100%;

    justify-content: center;
  }

  .header__container > :last-child {
    margin-left: auto;
  }
}
</style>