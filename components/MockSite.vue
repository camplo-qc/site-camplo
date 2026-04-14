<script setup lang="ts">
</script>

<template>
  <div class="mock-site">
    <div class="mock-nav">
      <span>Camping Lajoie</span>
      <span class="reserve">Réserver</span>
    </div>
    <div class="mock-hero">
      <div class="mock-h1">Au bord du lac,<br>depuis 1987.</div>
      <div class="mock-sub">
        40 emplacements · 3 chalets · Accès direct au lac.
      </div>
      <div class="mock-cta">Vérifier les dispos</div>
    </div>
  </div>
</template>

<style scoped>
.mock-site {
  width: 100%;
  height: 100%;
  padding: 32px;
  background: var(--color-paper);
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-family: var(--font-body);
}
.mock-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--color-fern);
  font-size: 17px;
}
.mock-nav .reserve {
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-soft);
}
.mock-hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mock-h1 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 26px;
  line-height: 1;
  color: var(--color-ink);
  letter-spacing: -.02em;
}
.mock-sub {
  margin-top: 10px;
  font-size: 13px;
  color: var(--ink-soft);
  line-height: 1.4;
}
.mock-cta {
  margin-top: 14px;
  padding: 9px 14px;
  background: var(--color-marmalade);
  color: var(--color-paper);
  font-weight: 700;
  font-size: 12px;
  align-self: flex-start;
}
</style>
