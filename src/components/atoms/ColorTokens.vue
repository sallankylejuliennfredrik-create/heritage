<template>
  <section class="color-tokens">

    <h2>Color Tokens</h2>

    <div class="tokens">

      <div class="token">
        <div class="token__color token__color--primary"></div>
        <strong>Primary</strong>
        <span>var(--color-primary)</span>
      </div>

      <div class="token">
        <div class="token__color token__color--surface"></div>
        <strong>Surface</strong>
        <span>var(--color-surface)</span>
      </div>

      <div class="token">
        <div class="token__color token__color--background"></div>
        <strong>Background</strong>
        <span>var(--color-background)</span>
      </div>

    </div>

  </section>
</template>

<style scoped>
.color-tokens {
  padding: 24px;
}

.tokens {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.token {
  width: 180px;

  display: flex;
  flex-direction: column;

  gap: 6px;
}

.token__color {
  height: 80px;

  border-radius: 8px;
}

.token__color--primary {
  background: var(--color-primary);
}

.token__color--surface {
  background: var(--color-surface);

  border: 1px solid #ddd;
}

.token__color--background {
  background: var(--color-background);

  border: 1px solid #ddd;
}
</style>