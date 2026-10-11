<template>
  <article class="heritage-card">

    <div class="heritage-card__photo">

      <div class="heritage-card__image">
        <BaseImage
          :src="image"
          :alt="title"
        />

        <svg
          class="heritage-card__wave"
          viewBox="0 0 300 20"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,10 C40,20 80,0 150,8 C220,16 260,2 300,10 L300,20 L0,20 Z"
          />
        </svg>
      </div>

      <span class="heritage-card__badge">
        Heritage<br />Site
      </span>

    </div>


    <div class="heritage-card__content">

      <BaseTypography
        tag="h3"
        variant="subheading"
      >
        {{ title }}
      </BaseTypography>


      <BaseTypography variant="body">
        {{ description }}
      </BaseTypography>


      <div class="heritage-card__action">

        <BaseButton @click="viewDetails">
          View Details
          <span class="heritage-card__arrow" aria-hidden="true">
            →
          </span>
        </BaseButton>

      </div>

    </div>

  </article>
</template>

<script>
import BaseButton from '../atoms/BaseButton.vue'
import BaseTypography from '../atoms/BaseTypography.vue'
import BaseImage from '../atoms/BaseImage.vue'

export default {
  name: 'HeritageCard',

  components: {
    BaseButton,
    BaseTypography,
    BaseImage
  },

  props: {

    id: {
      type: Number,
      required: true
    },

    image: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    }

  },

  methods: {

    viewDetails() {
      this.$router.push(
        `/heritage/${this.id}`
      )
    }

  }
}
</script>

<style scoped>

.heritage-card {
  display: flex;

  flex-direction: column;

  height: 100%;

  background:
    var(--color-surface);

  border-radius:
    var(--radius-lg);

  box-shadow:
    var(--shadow-sm);

  transform: rotate(-0.8deg);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}


.heritage-card:nth-child(even) {
  transform: rotate(0.8deg);
}


.heritage-card:hover {
  transform:
    rotate(0deg) translateY(-6px);

  box-shadow:
    var(--shadow-lg);
}


.heritage-card__photo {
  position: relative;

  padding: 12px 12px 0;
}


.heritage-card__image {
  position: relative;

  height: 200px;

  overflow: hidden;

  border-radius: var(--radius-md);
}


.heritage-card__image :deep(.base-image) {
  width: 100%;

  height: 100%;

  object-fit: cover;

  transition:
    transform 0.5s ease;
}


.heritage-card:hover
.heritage-card__image
:deep(.base-image) {
  transform:
    scale(1.06);
}


.heritage-card__wave {
  position: absolute;

  left: -1px;
  right: -1px;
  bottom: -1px;

  width: calc(100% + 2px);

  height: 18px;
}


.heritage-card__wave path {
  fill: var(--color-surface);
}


.heritage-card__badge {
  position: absolute;

  top: -6px;

  right: 22px;

  width: 62px;
  height: 62px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  border: 2px dashed rgba(255, 255, 255, 0.85);

  background: var(--color-coral);

  color: white;

  font-size: 0.62rem;

  font-weight: 700;

  letter-spacing: 0.02em;

  line-height: 1.25;

  text-align: center;

  transform: rotate(-8deg);

  box-shadow: var(--shadow-sm);
}


.heritage-card__content {
  display: flex;

  flex-direction: column;

  flex: 1;

  padding: 18px 22px 22px;

  gap: 10px;
}


.heritage-card__content
:deep(.typography--subheading) {
  position: relative;

  padding-bottom: 10px;

  color:
    var(--color-ocean-deep);

  font-family:
    var(--font-display);

  font-weight: 600;

  font-size:
    1.25rem;
}


.heritage-card__content
:deep(.typography--subheading)::after {
  content: '';

  position: absolute;

  left: 0;

  bottom: 0;

  width: 32px;

  height: 2px;

  background: var(--color-coral);
}


.heritage-card__content
:deep(.typography--body) {
  color:
    var(--color-text-muted);

  font-size:
    0.92rem;

  line-height:
    1.65;
}


.heritage-card__action {
  margin-top: auto;

  padding-top: 14px;

  border-top: 1px dashed var(--color-border);
}


.heritage-card__action
:deep(.base-button) {
  width: 100%;
}


.heritage-card__arrow {
  display: inline-block;

  margin-left: 4px;

  transition: transform 0.2s ease;
}


.heritage-card:hover .heritage-card__arrow {
  transform: translateX(3px);
}


@media (max-width: 600px) {

  .heritage-card,
  .heritage-card:nth-child(even) {
    transform: none;
  }

  .heritage-card:hover {
    transform: translateY(-4px);
  }

  .heritage-card__image {
    height: 220px;
  }

}

</style>