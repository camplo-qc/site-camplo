<script setup lang="ts">
</script>

<template>
  <section class="final" id="contact" aria-labelledby="final-title">
    <div class="final-inner">
      <div class="eyebrow reveal">Prochaine étape</div>
      <h2 id="final-title" class="reveal">
        Parlons de <em>votre</em> camping.
      </h2>
      <p class="reveal">
        Un appel de trente minutes, sans engagement. On regarde ensemble où
        vous en êtes et ce qu'on peut bâtir.
      </p>
      <a
        class="cta reveal"
        href="mailto:hello@camplo.ca?subject=Discussion%20Camplo"
      >
        Prendre rendez-vous <span class="arrow">→</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.final {
  padding: clamp(120px, 16vw, 200px) 0;
  text-align: center;
  border-top: 1px solid var(--rule);
}
.final-inner {
  max-width: 780px;
  margin: 0 auto;
  padding: 0 var(--page-x);
}
.final h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(42px, 7vw, 96px);
  letter-spacing: -.025em;
  line-height: 1;
  margin: 16px 0 0;
}
.final h2 em {
  color: var(--color-fern);
  font-style: italic;
}
.final p {
  margin: clamp(20px, 2.5vw, 32px) auto 0;
  font-size: clamp(17px, 1.3vw, 20px);
  color: var(--ink-soft);
  max-width: 48ch;
}
.final .cta {
  margin-top: clamp(36px, 4vw, 48px);
  font-size: 16px;
  padding: 20px 34px;
}
</style>
