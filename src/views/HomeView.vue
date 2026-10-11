<template>
  <main>
    <section class="hero">
      <div class="hero__overlay"></div>

      <div class="hero__content">
        <span class="hero__eyebrow"> PANGASINAN PROVINCE </span>

        <h1>
          Welcome
          <span>to  Pangasinan</span>
        </h1>

        <p>
          Uncover hidden gems, cultural heritage, and natural wonders that define our province's identity.
        </p>

        <div class="hero__actions">
          <a href="#heritage" class="hero__button">
            Explore Heritage
            <span aria-hidden="true"> ↓ </span>
          </a>
        </div>
      </div>

      <svg
        class="hero__wave"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,32 C150,60 350,0 600,24 C850,48 1050,4 1200,28 L1200,60 L0,60 Z"
        />
      </svg>
    </section>

    <section id="heritage" class="heritage-section">
      <div class="container">
        <div class="section-header">
          <div>
            <span class="section-header__eyebrow"> EXPLORE </span>

            <h2>Destinations Worth Discovering</h2>
          </div>

          <p>
            From secluded islands to historic lighthouses and soothing hot springs, uncover the places that capture Pangasinan's rich story.
          </p>
        </div>

        <HeritageGrid :sites="heritageSites" />
      </div>
    </section>

      
  </main>
</template>

<script>
import HeritageGrid from "../components/organisms/HeritageGrid.vue";

export default {
  name: "HomeView",

  components: {
    HeritageGrid,
  },

  data() {
    return {
      heritageSites: [
  {
    id: 1,
    title: "Hundred Islands",
    description:
      "Discover the stunning Hundred Islands National Park nestled in Alaminos City..",
    image: `${process.env.BASE_URL}images/hundred-islands.jpg`,
  },
  {
    id: 2,
    title: "Bolinao Lighthouse",
    description:
      "Explore this historic landmark and take in sweeping views of the coastline.",
    image: `${process.env.BASE_URL}images/bolinao-lighthouse.jpeg`,
  },
  {
    id: 3,
    title: "Balungao Hot Spring",
    description:
      "Unwind in natural hot springs framed by lush, scenic surroundings.",
    image: `${process.env.BASE_URL}images/balungao-hot-spring.jpg`,
  },
]
    };
  },
};
</script>

<style scoped>
.hero {
  position: relative;

  min-height: 600px;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: hidden;

  background: linear-gradient(
    120deg,
    var(--color-ocean-deep),
    var(--color-ocean)
  );
}

.hero::before {
  content: "";

  position: absolute;

  inset: 0;

  background: radial-gradient(
    circle at 80% 30%,
    rgba(226, 112, 58, 0.25),
    transparent 35%
  );
}

.hero__overlay {
  position: absolute;

  inset: 0;

  background: linear-gradient(
    90deg,
    rgba(13, 51, 70, 0.9),
    rgba(13, 51, 70, 0.35)
  );
}

.hero__content {
  position: relative;

  z-index: 1;

  width: 100%;

  max-width: 1200px;

  padding: 100px 20px 130px;
}

.hero__eyebrow {
  display: inline-block;

  margin-bottom: 14px;

  color: var(--color-coral);

  font-size: 0.78rem;

  font-weight: 800;

  letter-spacing: 0.15em;
}

.hero h1 {
  max-width: 750px;

  margin: 0;

  color: white;

  font-size: clamp(2.8rem, 8vw, 5.5rem);

  line-height: 0.98;

  letter-spacing: -0.02em;
}

.hero h1 span {
  display: block;

  color: var(--color-coral);
}

.hero p {
  max-width: 600px;

  margin: 24px 0 32px;

  color: rgba(255, 255, 255, 0.8);

  font-size: 1.05rem;

  line-height: 1.8;
}

.hero__button {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  padding: 13px 22px;

  border-radius: 999px;

  background: white;

  color: var(--color-ocean-deep);

  text-decoration: none;

  font-weight: 800;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  box-shadow: var(--shadow-sm);
}

.hero__button:hover {
  transform: translateY(-3px);

  box-shadow: var(--shadow-md);
}

.hero__wave {
  position: absolute;

  left: 0;

  bottom: -1px;

  width: 100%;

  height: 48px;

  z-index: 1;
}

.hero__wave path {
  fill: var(--color-background);
}

.heritage-section {
  padding: 90px 20px;
}

.container {
  width: 100%;

  max-width: 1200px;

  margin: 0 auto;
}

.section-header {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 50px;

  align-items: end;

  margin-bottom: 42px;
}

.section-header__eyebrow {
  color: var(--color-ocean);

  font-size: 0.75rem;

  font-weight: 800;

  letter-spacing: 0.14em;
}

.section-header h2 {
  max-width: 550px;

  margin: 8px 0 0;

  font-size: clamp(2rem, 5vw, 3.2rem);

  line-height: 1.1;

  letter-spacing: -0.02em;
}

.section-header p {
  margin: 0;

  color: var(--color-text-muted);

  line-height: 1.8;
}

.experience {
  position: relative;

  padding: 96px 20px 80px;

  background: var(--color-ocean);

  overflow: hidden;
}

.experience__wave {
  position: absolute;

  top: -1px;

  left: 0;

  width: 100%;

  height: 48px;

  transform: rotate(180deg);
}

.experience__wave path {
  fill: var(--color-background);
}

.experience__container {
  display: flex;

  justify-content: center;
}

.experience__content {
  max-width: 720px;

  text-align: center;

  color: white;
}

.experience__content > span {
  color: var(--color-coral);

  font-size: 0.75rem;

  font-weight: 800;

  letter-spacing: 0.15em;
}

.experience h2 {
  margin: 12px 0 18px;

  color: white;

  font-size: clamp(2rem, 5vw, 3.5rem);

  line-height: 1.1;
}

.experience p {
  margin: 0 auto 24px;

  max-width: 600px;

  color: rgba(255, 255, 255, 0.75);

  line-height: 1.8;
}

.experience__link {
  display: inline-flex;

  align-items: center;

  gap: 6px;

  color: white;

  font-weight: 800;

  text-decoration: none;

  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  padding-bottom: 4px;

  transition: border-color 0.2s ease;
}

.experience__link span {
  transition: transform 0.2s ease;
}

.experience__link:hover {
  border-color: var(--color-coral);
}

.experience__link:hover span {
  transform: translateX(3px);
}

@media (max-width: 700px) {
  .hero {
    min-height: 520px;
  }

  .hero__content {
    padding: 80px 20px 96px;
  }

  .section-header {
    grid-template-columns: 1fr;

    gap: 16px;
  }

  .heritage-section {
    padding: 64px 16px;
  }

  .experience {
    padding: 72px 16px 60px;
  }
}
</style>