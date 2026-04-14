<script setup lang="ts">
defineProps<{
  reverse?: boolean
  eyebrow: string
  heading: string
  anchorId?: string
  paragraphs: string[]
  labels: string[]
  kind: 'site' | 'crm'
}>()
</script>

<template>
  <section class="product" :id="anchorId">
    <div class="wrap">
      <div class="product-row" :class="{ reverse }">
        <div class="product-copy reveal">
          <div class="eyebrow">{{ eyebrow }}</div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <h3 class="product-heading" v-html="heading" />
          <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
          <div class="labels">
            <span v-for="(label, i) in labels" :key="i">{{ label }}</span>
          </div>
        </div>
        <div class="product-visual reveal">
          <div class="mock" :aria-label="`Aperçu — ${eyebrow}`">
            <MockSite v-if="kind === 'site'" />
            <MockCrm v-else />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product {
  padding: clamp(100px, 12vw, 160px) 0;
  border-top: 1px solid var(--rule);
}
.product:global(.no-top) { border-top: none; padding-top: 0; }
.product-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
}
.product-row.reverse { grid-auto-flow: dense; }
.product-row.reverse > .product-copy { grid-column: 2; }
.product-row.reverse > .product-visual { grid-column: 1; grid-row: 1; }

.product-heading {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(30px, 3.6vw, 52px);
  letter-spacing: -.02em;
  line-height: 1.05;
  margin: 14px 0 0;
  color: var(--color-ink);
}
.product-heading :deep(em) {
  font-style: italic;
  color: var(--color-fern);
  font-weight: 800;
}
.product-copy p {
  margin: 20px 0 0;
  font-size: 17px;
  line-height: 1.62;
  color: var(--ink-soft);
  max-width: 48ch;
}
.labels {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.labels span {
  font-family: var(--font-label);
  font-weight: 600;
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--color-fern);
  padding: 8px 12px;
  border: 1px solid var(--color-fern);
}

.mock {
  background: #fff;
  border: 1px solid var(--rule);
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  box-shadow:
    0 28px 60px -28px rgba(42, 74, 34, 0.25),
    0 6px 18px -6px rgba(42, 74, 34, 0.12);
}

@media (max-width: 900px) {
  .product-row { grid-template-columns: 1fr; gap: 40px; }
  .product-row.reverse > .product-copy { grid-column: 1; }
  .product-row.reverse > .product-visual { grid-column: 1; grid-row: auto; }
}
</style>
