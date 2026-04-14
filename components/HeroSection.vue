<script setup lang="ts">
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <svg
      class="hero-topo"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="#3E6B31" stroke-width="1" opacity=".28">
        <path d="M-50,760 Q350,720 700,740 T1450,710" />
        <path d="M-50,680 Q350,640 700,655 T1450,625" />
        <path d="M-50,600 Q350,575 700,575 T1450,545" />
        <path d="M-50,520 Q350,495 700,495 T1450,465" />
        <path d="M-50,440 Q350,425 700,420 T1450,385" />
        <path d="M-50,360 Q350,350 700,340 T1450,305" />
        <path d="M-50,280 Q350,280 700,265 T1450,225" />
        <path d="M-50,200 Q350,210 700,185 T1450,145" />
        <path d="M-50,120 Q350,140 700,115 T1450,80" />
        <path d="M-50,40 Q350,60 700,35 T1450,10" />
      </g>
    </svg>
    <div class="wrap hero-inner">
      <div class="eyebrow reveal">Agence québécoise</div>
      <h1 id="hero-title" class="display reveal" style="margin-top: 24px">
        <span class="line">Un camping.</span>
        <span class="line">Une famille.</span>
        <span class="line"><span class="accent">Un logiciel de 2008.</span></span>
      </h1>
      <p class="lede reveal">
        Sites de réservation et logiciel de gestion pour les campings
        indépendants du Québec.
      </p>
      <div class="ctas reveal">
        <a class="cta" href="#contact">
          Parlons de votre camping <span class="arrow">→</span>
        </a>
      </div>
      <div class="hero-meta reveal">
        <div class="hero-meta-item">
          <div class="label">En prod</div>
          <div class="value">Camping Lajoie</div>
        </div>
        <div class="hero-meta-item">
          <div class="label">Langue</div>
          <div class="value">Français</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: clamp(80px, 12vw, 140px) 0 clamp(100px, 14vw, 160px);
  overflow: hidden;
}
.hero-topo {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  width: 100%;
  height: 100%;
}
.hero-inner {
  position: relative;
  z-index: 2;
  max-width: 900px;
}
.hero h1 {
  font-size: clamp(44px, 7.5vw, 100px);
  letter-spacing: -.028em;
  margin: 0;
}
.hero h1 :deep(.line) { display: block; }
.hero h1 :deep(.accent) {
  color: var(--color-fern);
  font-style: italic;
  font-weight: 800;
}
.hero .lede {
  margin-top: clamp(24px, 3vw, 32px);
  max-width: 540px;
  font-size: clamp(17px, 1.4vw, 20px);
}
.ctas {
  margin-top: clamp(30px, 3.5vw, 44px);
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}
.hero-meta {
  margin-top: clamp(56px, 7vw, 80px);
  display: flex;
  gap: clamp(32px, 5vw, 64px);
  flex-wrap: wrap;
  padding-top: 24px;
  border-top: 1px solid var(--rule);
  max-width: 640px;
}
.hero-meta-item {
  flex: 1;
  min-width: 140px;
}
.hero-meta-item .label {
  font-family: var(--font-label);
  font-weight: 600;
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--color-fern);
}
.hero-meta-item .value {
  margin-top: 6px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 16px;
  color: var(--color-ink);
  line-height: 1.35;
}
</style>
