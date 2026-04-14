<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="wrap footer-inner">
      <div>© {{ year }} Camplo · Conçu au Québec</div>
      <div class="footer-links">
        <a href="mailto:hello@camplo.ca">hello@camplo.ca</a>
        <a href="#">Confidentialité</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 44px 0 36px;
  border-top: 1px solid var(--rule);
  font-family: var(--font-label);
  font-weight: 500;
  font-size: 13px;
  color: var(--ink-muted);
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
}
.footer-links { display: flex; gap: 22px; }
.footer-links a {
  color: var(--ink-muted);
  text-decoration: none;
  transition: color .15s;
}
.footer-links a:hover { color: var(--color-fern); }
</style>
