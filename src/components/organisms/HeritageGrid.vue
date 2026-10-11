<template>
  <section class="heritage-grid" aria-labelledby="heritage-grid-title">
    <div class="heritage-grid__header">
      <h2 id="heritage-grid-title" class="heritage-grid__title">
        Featured heritage sites
      </h2>
      <p class="heritage-grid__intro">
        Coastlines, salt fields, and landmarks that shaped Pangasinan —
        start your visit here.
      </p>
    </div>

    <div class="heritage-grid__cards">
      <HeritageCard
        v-for="site in sites"
        :key="site.id"
        :id="site.id"
        :title="site.title"
        :description="site.description"
        :image="site.image"
      />
    </div>
  </section>
</template>

<script>
import HeritageCard from '../molecules/HeritageCard.vue'

export default {
  name: 'HeritageGrid',

  components: {
    HeritageCard
  },

  props: {
    sites: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.heritage-grid {
  width: 100%;

  max-width: var(--content-width);

  margin: 0 auto;

  padding: var(--space-2xl) var(--space-lg);
}

.heritage-grid__header {
  max-width: 56ch;

  margin-bottom: var(--space-xl);
}

.heritage-grid__title {
  margin: 0 0 var(--space-sm);

  font-size: 2rem;
}

.heritage-grid__intro {
  margin: 0;

  color: var(--color-text-muted);

  font-size: 1.05rem;
}

.heritage-grid__cards {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  gap: var(--space-lg);
}

@media (min-width: 1200px) {
  .heritage-grid {
    padding-left: 0;

    padding-right: 0;
  }
}

@media (max-width: 1024px) {
  .heritage-grid {
    padding: var(--space-xl) var(--space-lg);
  }
}

@media (max-width: 767px) {
  .heritage-grid__title {
    font-size: 1.6rem;
  }

  .heritage-grid__cards {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

    gap: var(--space-md);
  }
}

@media (max-width: 600px) {
  .heritage-grid__cards {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>