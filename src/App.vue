<template>
  <div id="app" class="app">
    <a href="#main-content" class="skip-link"> Skip to main content </a>

    <HeaderNavigation />
    <main id="main-content" class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,32 C150,60 350,0 600,24 C850,48 1050,4 1200,28 L1200,60 L0,60 Z"
          />
        </svg>
      </div>

      <div class="footer__main">
        <div class="footer__main-container">
          <div class="footer__brand">
            <span class="footer__brand-name">Pangasinan Heritage</span>
            <p class="footer__brand-tagline">
              A coastline of hundred islands, salt fields, and stories worth
              the trip.
            </p>
          </div>

          <nav class="footer__col" aria-label="Explore">
            <span class="footer__col-title">Explore</span>
            <a href="#" class="footer__link">Hundred Islands</a>
            <a href="#" class="footer__link">Bolinao & Patar Beach</a>
            <a href="#" class="footer__link">Salt Heritage Trail</a>
          </nav>

          <nav class="footer__col" aria-label="About">
            <span class="footer__col-title">About</span>
            <a href="#" class="footer__link">Our Story</a>
            <a href="#" class="footer__link">Visitor Guides</a>
            <a href="#" class="footer__link">Contact</a>
          </nav>

          <div class="footer__col">
            <span class="footer__col-title">Connect</span>
            <div class="footer__social">
              <a href="#" class="footer__icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" class="footer__icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    stroke-width="1.6"
                  />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__bottom-container">
          <span> © 2026 Pangasinan Heritage </span>

          <span> Proudly promoting Pangasinan tourism </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderNavigation from "./components/organisms/HeaderNavigation.vue";

export default {
  name: "App",

  components: {
    HeaderNavigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600&family=Work+Sans:wght@400;500;600;700&display=swap");

:root {
  /* Coastal heritage palette: ocean depths, lagoon water, sun-bleached sand, sunset coral */
  --color-ocean-deep: #0d3346;
  --color-ocean: #1c6e8c;
  --color-lagoon: #5fa8c7;
  --color-lagoon-light: #eaf4f8;

  --color-sand: #f4ead6;
  --color-sand-deep: #e3d0a8;

  --color-coral: #e2703a;
  --color-coral-dark: #c25a29;

  --color-ink: #16262b;
  --color-ink-muted: #5c6b6f;
  --color-line: #ddd0b4;

  /* Compatibility aliases used by existing components */
  --color-primary: var(--color-ocean);
  --color-primary-dark: var(--color-ocean-deep);
  --color-primary-light: var(--color-lagoon-light);

  --color-accent: var(--color-coral);

  --color-background: var(--color-sand);
  --color-surface: #fffdf8;

  --color-text: var(--color-ink);
  --color-text-muted: var(--color-ink-muted);

  --color-border: var(--color-line);

  --font-display: "Spectral", Georgia, serif;
  --font-body: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;

  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 28px;

  --shadow-sm: 0 2px 10px rgba(13, 51, 70, 0.08);

  --shadow-md: 0 14px 34px rgba(13, 51, 70, 0.12);

  --shadow-lg: 0 24px 54px rgba(13, 51, 70, 0.16);

  --content-width: 1200px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;

  scroll-padding-top: 80px;
}

body {
  margin: 0;

  min-width: 320px;

  background: var(--color-background);

  color: var(--color-text);

  font-family: var(--font-body);

  line-height: 1.6;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4 {
  font-family: var(--font-display);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--color-ocean-deep);
}

img {
  display: block;

  max-width: 100%;

  height: auto;
}

button,
input,
textarea,
select {
  font: inherit;

  max-width: 100%;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
}

::selection {
  background: var(--color-ocean);

  color: white;
}

.app {
  width: 100%;

  min-height: 100vh;

  min-height: 100dvh;

  display: flex;

  flex-direction: column;

  overflow-x: hidden;
}

.main-content {
  width: 100%;

  max-width: 100%;

  flex: 1;

  min-width: 0;

  min-height: calc(100vh - 72px);

  min-height: calc(100dvh - 72px);
}

.skip-link {
  position: fixed;

  top: -100px;

  left: 16px;

  z-index: 9999;

  padding: 12px 20px;

  border-radius: 999px;

  background: var(--color-ocean-deep);

  color: white;

  font-weight: 600;

  text-decoration: none;

  box-shadow: var(--shadow-md);

  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 16px;
}

:focus-visible {
  outline: 3px solid var(--color-coral);

  outline-offset: 3px;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;

  transform: translateY(8px);
}

.page-leave-to {
  opacity: 0;

  transform: translateY(-8px);
}

.footer {
  width: 100%;

  margin-top: auto;

  background: var(--color-ocean-deep);

  color: white;

  position: relative;
}

.footer__wave {
  width: 100%;

  line-height: 0;

  transform: translateY(1px);
}

.footer__wave svg {
  width: 100%;

  height: 36px;

  display: block;
}

.footer__wave path {
  fill: var(--color-ocean-deep);
}

.footer__main-container {
  max-width: var(--content-width);

  margin: 0 auto;

  padding: var(--space-xl) var(--space-lg) var(--space-lg);

  display: grid;

  grid-template-columns: 1.4fr 1fr 1fr 1fr;

  gap: var(--space-xl);
}

.footer__brand-name {
  display: block;

  font-family: var(--font-display);

  font-size: 1.4rem;

  font-weight: 600;

  color: white;

  margin-bottom: var(--space-sm);
}

.footer__brand-tagline {
  margin: 0;

  max-width: 32ch;

  color: rgba(255, 255, 255, 0.65);

  font-size: 0.92rem;
}

.footer__col {
  display: flex;

  flex-direction: column;

  gap: var(--space-sm);
}

.footer__col-title {
  font-weight: 600;

  color: rgba(255, 255, 255, 0.85);

  margin-bottom: var(--space-xs);

  font-size: 0.92rem;
}

.footer__link {
  color: rgba(255, 255, 255, 0.65);

  text-decoration: none;

  font-size: 0.92rem;

  width: fit-content;
}

.footer__link:hover {
  color: var(--color-coral);
}

.footer__social {
  display: flex;

  gap: var(--space-sm);
}

.footer__icon {
  width: 36px;

  height: 36px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);

  color: white;

  transition: background 0.2s ease, color 0.2s ease;
}

.footer__icon svg {
  width: 18px;

  height: 18px;
}

.footer__icon:hover {
  background: var(--color-coral);
}

.footer__bottom {
  width: 100%;

  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer__bottom-container {
  width: 100%;

  max-width: var(--content-width);

  margin: 0 auto;

  padding: 18px 24px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  color: rgba(255, 255, 255, 0.6);

  font-size: 0.8rem;
}

@media (min-width: 1200px) {
  .footer__bottom-container {
    padding-left: 0;

    padding-right: 0;
  }

  .footer__main-container {
    padding-left: 0;

    padding-right: 0;
  }
}

@media (max-width: 1024px) {
  :root {
    --space-2xl: 48px;
  }

  html {
    scroll-padding-top: 72px;
  }

  .main-content {
    min-height: calc(100vh - 72px);

    min-height: calc(100dvh - 72px);
  }

  .footer__bottom-container {
    padding: 18px 24px;
  }

  .footer__main-container {
    grid-template-columns: 1.2fr 1fr 1fr;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 767px) {
  :root {
    --space-xl: 32px;

    --space-2xl: 40px;
  }

  html {
    scroll-padding-top: 68px;
  }

  .main-content {
    min-height: calc(100vh - 68px);

    min-height: calc(100dvh - 68px);
  }

  .footer__bottom-container {
    padding: 16px 20px;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    text-align: center;

    gap: 4px;
  }

  .footer__main-container {
    grid-template-columns: 1fr 1fr;

    gap: var(--space-lg);
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 600px) {
  body {
    font-size: 15px;
  }

  html {
    scroll-padding-top: 64px;
  }

  .main-content {
    min-height: calc(100vh - 64px);

    min-height: calc(100dvh - 64px);
  }

  .footer__bottom-container {
    padding: 15px 16px;

    font-size: 0.75rem;
  }

  .footer__main-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 479px) {
  :root {
    --space-md: 14px;

    --space-lg: 20px;

    --space-xl: 28px;
  }

  body {
    font-size: 14px;
  }

  .footer__bottom-container {
    padding: 14px 12px;
  }
}

@media (max-width: 359px) {
  body {
    font-size: 13px;
  }

  .footer__bottom-container {
    padding: 12px 10px;
  }
}

@media (max-width: 767px) and (orientation: landscape) {
  .main-content {
    min-height: calc(100vh - 60px);

    min-height: calc(100dvh - 60px);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;

    animation-iteration-count: 1 !important;

    transition-duration: 0.01ms !important;

    scroll-behavior: auto !important;
  }
}
</style>