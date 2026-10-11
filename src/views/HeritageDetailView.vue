<template>
  <main class="detail-page">

    <div class="container">

      <button
        class="back-button"
        type="button"
        @click="goBack"
      >
        <span aria-hidden="true">←</span> Back to Heritage Sites
      </button>

      <article
        v-if="site"
        class="heritage-detail"
      >

        <div class="heritage-detail__media">

          <BaseImage
            :src="site.image"
            :alt="site.title"
          />

          <div class="heritage-detail__media-overlay"></div>

          <div class="heritage-detail__media-caption">
            <span class="heritage-detail__label">
              PANGASINAN HERITAGE
            </span>

            <BaseTypography
              tag="h1"
              variant="heading"
            >
              {{ site.title }}
            </BaseTypography>
          </div>

        </div>

        <div class="heritage-detail__content">

          <BaseTypography variant="body">
            {{ site.description }}
          </BaseTypography>


          <p class="heritage-detail__text">
            Discover the history, culture, and significance
            of {{ site.title }} as one of Pangasinan's
            notable destinations.
          </p>

        </div>

      </article>


      <!-- Site Not Found -->
      <section
        v-else
        class="not-found"
        aria-labelledby="not-found-heading"
      >

        <h1 id="not-found-heading">
          Heritage Site Not Found
        </h1>

        <p>
          Sorry, the heritage site you are looking for
          does not exist.
        </p>

        <button
          class="home-button"
          type="button"
          @click="goHome"
        >
          Return Home
        </button>

      </section>

    </div>

  </main>
</template>


<script>
import BaseImage from '../components/atoms/BaseImage.vue'
import BaseTypography from '../components/atoms/BaseTypography.vue'

export default {
  name: 'HeritageDetailView',

  components: {
    BaseImage,
    BaseTypography
  },


  data() {
    return {

      heritageSites: [
  {
    id: 1,
    title: 'Hundred Islands',
    description:
      'Explore the breathtaking Hundred Islands National Park in Alaminos City, featuring beautiful islands, clear waters, and stunning coastal scenery.',
    image: `${process.env.BASE_URL}images/hundred-islands.jpg`,
  },

  {
    id: 2,
    title: 'Bolinao Lighthouse',
    description:
      'Explore this historic landmark and take in sweeping views of the coastline.',
    image: `${process.env.BASE_URL}images/bolinao-lighthouse.jpeg`,
  },

  {
    id: 3,
    title: 'Balungao Hot Spring',
    description:
      'Experience the relaxing natural hot springs of Balungao surrounded by beautiful landscapes and peaceful scenery.',
    image: `${process.env.BASE_URL}images/balungao-hot-spring.jpg`,
  },
]

    }
  },


  computed: {

    site() {

      const id =
        Number(this.$route.params.id)

      return this.heritageSites.find(
        site => site.id === id
      )

    }

  },


  methods: {

    goBack() {

      this.$router.back()

    },


    goHome() {

      this.$router.push('/')

    }

  }

}
</script>


<style scoped>

.detail-page {
  min-height: 100vh;

  padding: 32px 0 64px;

  background: var(--color-background);
}


.container {
  width: 100%;

  max-width: 1000px;

  margin: 0 auto;

  padding-left: 16px;
  padding-right: 16px;
}

.back-button {
  display: inline-flex;

  align-items: center;

  gap: 6px;

  margin-bottom: 24px;

  padding: 9px 16px 9px 14px;

  border: 1px solid var(--color-border);

  border-radius: 999px;

  background: transparent;

  color: var(--color-ocean-deep);

  font-size: 0.95rem;

  font-weight: 600;

  cursor: pointer;

  transition: background 0.2s ease, border-color 0.2s ease;
}


.back-button:hover {
  background: var(--color-lagoon-light);

  border-color: var(--color-lagoon);
}


.back-button:focus-visible {
  outline: 3px solid var(--color-coral);

  outline-offset: 3px;
}


.heritage-detail {
  overflow: hidden;

  background: var(--color-surface);

  border-radius: var(--radius-lg);

  box-shadow: var(--shadow-md);
}


.heritage-detail__media {
  position: relative;
}


.heritage-detail__media :deep(.base-image) {
  width: 100%;

  height: 280px;

  object-fit: cover;
}


.heritage-detail__media-overlay {
  position: absolute;

  inset: 0;

  background: linear-gradient(
    to top,
    rgba(13, 51, 70, 0.85),
    rgba(13, 51, 70, 0) 60%
  );
}


.heritage-detail__media-caption {
  position: absolute;

  left: 0;

  right: 0;

  bottom: 0;

  padding: 24px;
}


.heritage-detail__media-caption :deep(.typography--heading) {
  margin: 0;

  color: white;

  font-family: var(--font-display);

  font-size: clamp(1.6rem, 4vw, 2.4rem);

  line-height: 1.15;
}


.heritage-detail__content {
  padding: 24px;
}


.heritage-detail__label {
  display: block;

  margin-bottom: 8px;

  color: var(--color-coral);

  font-size: 0.8rem;

  font-weight: 700;

  letter-spacing: 0.08em;
}


.heritage-detail__text {
  color: var(--color-text-muted);

  line-height: 1.7;
}


.not-found {
  padding: 48px 24px;

  background: var(--color-surface);

  border-radius: var(--radius-lg);

  text-align: center;
}


.not-found h1 {
  margin-top: 0;
}


.not-found p {
  color: var(--color-text-muted);
}


.home-button {
  margin-top: 16px;

  padding: 10px 20px;

  border: none;

  border-radius: 999px;

  background: var(--color-ocean);

  color: #ffffff;

  font-weight: 600;

  cursor: pointer;

  transition: background 0.2s ease;
}


.home-button:hover {
  background: var(--color-ocean-deep);
}


.home-button:focus-visible {
  outline: 3px solid var(--color-coral);

  outline-offset: 3px;
}

@media (min-width: 768px) {

  .detail-page {
    padding-top: 48px;
  }


  .container {
    padding-left: 24px;
    padding-right: 24px;
  }


  .heritage-detail__media :deep(.base-image) {
    height: 450px;
  }


  .heritage-detail__media-caption {
    padding: 40px;
  }


  .heritage-detail__content {
    padding: 40px;
  }

}


@media (min-width: 1200px) {

  .container {
    padding-left: 0;
    padding-right: 0;
  }

}

</style>