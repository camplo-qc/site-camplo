<script setup lang="ts">
</script>

<template>
  <nav aria-label="Navigation principale" class="nav">
    <div class="wrap nav-inner">
      <a href="#" class="logo-mark" aria-label="Camplo — accueil">
        <CamploMark />
        <span>Camplo</span>
      </a>
      <div class="nav-links">
        <a href="#approche">Approche</a>
        <a href="#produits">Produits</a>
        <a href="#faq">FAQ</a>
        <a class="cta-ghost" href="#contact">Parlons-nous</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(246, 240, 224, 0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--rule-light);
}
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
}
.logo-mark {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 20px;
  color: var(--color-fern);
  text-decoration: none;
  letter-spacing: -.01em;
}
.logo-mark :deep(svg) {
  width: 28px;
  height: 28px;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
  font-family: var(--font-label);
  font-weight: 600;
  font-size: 14px;
}
.nav-links a {
  color: var(--color-ink);
  text-decoration: none;
  opacity: .7;
  transition: opacity .15s, color .15s;
}
.nav-links a:hover {
  opacity: 1;
  color: var(--color-fern);
}
.nav-links a:focus-visible {
  outline: 2px solid var(--color-fern);
  outline-offset: 4px;
}

@media (max-width: 900px) {
  .nav-links { gap: 14px; font-size: 13px; }
}
@media (max-width: 600px) {
  .nav-links a:not(.cta-ghost) { display: none; }
}
</style>
