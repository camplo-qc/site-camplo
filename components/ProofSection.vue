<script setup lang="ts">
</script>

<template>
  <section class="proof" aria-labelledby="proof-title">
    <svg
      class="proof-topo"
      viewBox="0 0 1400 600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill="none" stroke="#F6F0E0" stroke-width="1">
        <path d="M0,480 Q350,440 700,460 T1400,430" />
        <path d="M0,400 Q350,370 700,380 T1400,350" />
        <path d="M0,320 Q350,300 700,305 T1400,275" />
        <path d="M0,240 Q350,230 700,225 T1400,195" />
        <path d="M0,160 Q350,160 700,150 T1400,115" />
        <path d="M0,80 Q350,90 700,75 T1400,40" />
      </g>
    </svg>
    <div class="wrap proof-inner">
      <div class="eyebrow">Ils utilisent Camplo</div>
      <h2 id="proof-title" class="proof-heading">
        Déjà en production chez un camping québécois.
      </h2>
      <div class="quote" data-placeholder>
        Citation à obtenir — ce qu'une cliente dit à ses amies sur Camplo, mot
        pour mot.
      </div>
      <div class="attr">— Propriétaire de camping, Québec · Cliente Camplo</div>
    </div>
  </section>
</template>

<style scoped>
.proof {
  background: var(--color-fern-deep);
  color: var(--color-paper);
  padding: clamp(120px, 14vw, 180px) 0;
  position: relative;
  overflow: hidden;
}
.proof-topo {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: .18;
  width: 100%;
  height: 100%;
}
.proof-inner {
  position: relative;
  z-index: 2;
  max-width: 920px;
}
.proof :deep(.eyebrow) { color: var(--color-marmalade-bright); }
.proof-heading {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(26px, 2.8vw, 38px);
  margin: 14px 0 0;
  letter-spacing: -.015em;
  color: var(--color-paper);
}
.quote {
  margin-top: clamp(28px, 4vw, 44px);
  font-family: var(--font-display);
  font-weight: 800;
  font-style: italic;
  font-size: clamp(28px, 4vw, 56px);
  line-height: 1.12;
  letter-spacing: -.018em;
  color: var(--color-paper);
}
.quote::before {
  content: "«\00a0";
  color: var(--color-marmalade-bright);
  font-style: normal;
}
.quote::after {
  content: "\00a0»";
  color: var(--color-marmalade-bright);
  font-style: normal;
}
.attr {
  margin-top: clamp(20px, 2.5vw, 32px);
  font-family: var(--font-label);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: .08em;
  color: rgba(246, 240, 224, 0.72);
}
.proof-stats {
  margin-top: clamp(44px, 6vw, 64px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  padding-top: 36px;
  border-top: 1px solid rgba(246, 240, 224, 0.18);
}
.proof-stat .n {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(34px, 4.5vw, 56px);
  letter-spacing: -.015em;
  line-height: 1;
  color: var(--color-marmalade-bright);
}
.proof-stat .l {
  margin-top: 10px;
  font-family: var(--font-label);
  font-weight: 600;
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(246, 240, 224, 0.7);
}

@media (max-width: 900px) {
  .proof-stats { grid-template-columns: 1fr; gap: 20px; }
}
</style>
