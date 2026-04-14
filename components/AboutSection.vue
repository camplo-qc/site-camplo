<script setup lang="ts">
</script>

<template>
  <section class="about" aria-labelledby="about-title">
    <div class="wrap about-inner">
      <div class="eyebrow reveal">Qui fait Camplo</div>
      <h2 id="about-title" class="reveal">
        On construit chaque système comme si c'était le nôtre.
      </h2>
      <p class="reveal">
        Camplo, c'est une petite équipe québécoise. On connaît le vocabulaire,
        on sait la différence entre un terrain saisonnier et un emplacement de
        passage. On ne traduit pas un outil américain — on en construit un
        pour vous, ici.
      </p>
      <p class="reveal">
        Les campings indépendants méritent mieux que des logiciels génériques.
        Vos données vous appartiennent, vos clients aussi, votre site aussi.
        Pas de lock-in.
      </p>
      <p class="signature reveal">Ici. En français. Construit pour durer.</p>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: clamp(100px, 12vw, 160px) 0;
  border-top: 1px solid var(--rule);
}
.about-inner { max-width: 780px; }
.about h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(32px, 4vw, 56px);
  letter-spacing: -.022em;
  line-height: 1.05;
  margin: 14px 0 0;
}
.about p {
  margin-top: 24px;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: clamp(17px, 1.3vw, 19px);
  line-height: 1.65;
  color: var(--ink-soft);
}
.about p.signature {
  margin-top: 28px;
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(18px, 1.4vw, 22px);
  color: var(--color-ink);
}
</style>
