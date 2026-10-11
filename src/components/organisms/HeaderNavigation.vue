<template>
  <header class="header">
    <div class="header__container">

      <!-- Logo -->
      <router-link
        to="/"
        class="brand"
        aria-label="Pangasinan Heritage Home"
      >
        <div class="brand__icon">
          P
        </div>

        <div class="brand__text">
          <strong>Pangasinan</strong>
          <span>HERITAGE</span>
        </div>
      </router-link>


      <!-- Navigation -->
      <nav class="navigation">
        <router-link
          to="/"
          class="navigation__link"
        >
          Home
        </router-link>

        <a
          href="#heritage"
          class="navigation__link"
        >
          Heritage Sites
        </a>
      </nav>

      <div class="search">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8" />
          <line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>

        <input
          type="search"
          placeholder="Search places..."
          aria-label="Search heritage sites"
        />
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNavigation'
}
</script>

<style scoped>

.header {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: rgba(255, 253, 248, 0.96);

  border-bottom: 1px solid var(--color-border);

  backdrop-filter: blur(10px);
}


.header__container {
  width: 100%;
  max-width: 1200px;

  min-height: 72px;

  margin: 0 auto;

  padding: 10px 20px;

  display: flex;
  align-items: center;

  gap: 30px;
}


.brand {
  display: flex;
  align-items: center;

  gap: 10px;

  text-decoration: none;

  color: var(--color-text);

  flex-shrink: 0;
}


.brand__icon {
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 40% 60% 60% 40% / 55% 45% 55% 45%;

  background: var(--color-ocean);

  color: white;

  font-family: var(--font-display);

  font-weight: 600;
}


.brand__text {
  display: flex;
  flex-direction: column;

  line-height: 1.1;
}


.brand__text strong {
  font-family: var(--font-display);

  font-weight: 600;

  font-size: 16px;

  color: var(--color-ocean-deep);
}


.brand__text span {
  margin-top: 4px;

  color: var(--color-coral);

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 2px;
}


/* NAVIGATION */

.navigation {
  display: flex;
  align-items: center;

  gap: 5px;
}


.navigation__link {
  padding: 9px 13px;

  border-radius: 9px;

  color: var(--color-text);

  text-decoration: none;

  font-size: 14px;

  font-weight: 600;

  transition: 0.2s;
}


.navigation__link:hover {
  background: var(--color-lagoon-light);

  color: var(--color-ocean-deep);
}


/* SEARCH */

.search {
  margin-left: auto;

  width: 200px;
  height: 40px;

  display: flex;
  align-items: center;

  gap: 8px;

  padding: 0 12px;

  border: 1px solid var(--color-border);

  border-radius: 10px;

  background: var(--color-surface);

  color: var(--color-text-muted);

  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.search:focus-within {
  border-color: var(--color-lagoon);

  box-shadow: 0 0 0 3px var(--color-lagoon-light);
}


.search svg {
  width: 16px;
  height: 16px;

  flex-shrink: 0;
}


.search input {
  width: 100%;

  border: none;

  outline: none;

  background: transparent;

  color: var(--color-text);

  font-size: 13px;
}


@media (max-width: 700px) {

  .header__container {
    gap: 15px;
  }

  .navigation {
    display: none;
  }

}


@media (max-width: 500px) {

  .brand__text {
    display: none;
  }

  .search {
    width: 160px;
  }

}

</style>