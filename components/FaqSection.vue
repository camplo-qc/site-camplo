<script setup lang="ts">
const faqs = [
  {
    q: 'Combien ça coûte ?',
    a: 'Chaque camping est différent. Le prix se discute au premier appel, sans engagement. Notre modèle : un montant upfront pour la mise en place, puis un abonnement mensuel pour l\'hébergement, le support et les mises à jour.',
  },
  {
    q: 'Combien de temps pour mettre ça en place ?',
    a: 'Entre 4 et 8 semaines selon la taille de votre camping, incluant la migration de vos données existantes et votre formation.',
  },
  {
    q: 'Qu\'est-ce qui arrive si Camplo ferme ?',
    a: 'Vos données sont stockées localement sur votre ordinateur, au format SQLite. Vous pouvez les exporter quand vous voulez. Aucun lock-in.',
  },
  {
    q: 'Travaillez-vous avec les campings hors Québec ?',
    a: 'Pour l\'instant, non. On se concentre sur les campings indépendants du Québec. Une version anglaise viendra quand on aura prouvé qu\'on couvre bien notre premier marché.',
  },
  {
    q: 'Est-ce que ça fonctionne si mon wifi tombe ?',
    a: 'Le CRM oui — il tourne sur votre ordinateur, pas dans le nuage. Le site de réservation a besoin d\'internet mais continue de prendre les bookings même si votre ordinateur est éteint, et tout se synchronise dès que vous vous reconnectez.',
  },
]
</script>

<template>
  <section class="faq" id="faq" aria-labelledby="faq-title">
    <div class="wrap faq-inner">
      <div class="eyebrow">Questions qu'on nous pose</div>
      <h2 id="faq-title">Ce que vous voulez probablement savoir.</h2>
      <div class="faq-list">
        <details v-for="(item, i) in faqs" :key="i" class="faq-item">
          <summary class="faq-q">
            {{ item.q }}
            <span class="plus" aria-hidden="true" />
          </summary>
          <div class="faq-a">
            <p>{{ item.a }}</p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding: clamp(80px, 10vw, 140px) 0;
  border-top: 1px solid var(--rule);
  background: var(--color-paper-warm);
}
.faq-inner { max-width: 820px; margin: 0 auto; }
.faq h2 {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(30px, 3.5vw, 48px);
  letter-spacing: -.02em;
  line-height: 1.05;
  margin: 14px 0 0;
}
.faq-list {
  margin-top: clamp(36px, 5vw, 52px);
  display: flex;
  flex-direction: column;
}
.faq-item { border-top: 1px solid var(--rule); }
.faq-item:last-child { border-bottom: 1px solid var(--rule); }
.faq-q {
  list-style: none;
  padding: 22px 0;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(19px, 1.9vw, 24px);
  letter-spacing: -.01em;
  cursor: pointer;
  color: var(--color-ink);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  transition: color .15s;
}
.faq-q::-webkit-details-marker { display: none; }
.faq-q:hover { color: var(--color-fern); }
.plus {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  position: relative;
}
.plus::before, .plus::after {
  content: "";
  position: absolute;
  background: var(--color-fern);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.plus::before { width: 13px; height: 1.5px; }
.plus::after {
  width: 1.5px;
  height: 13px;
  transition: transform .2s var(--ease);
}
.faq-item[open] .plus::after {
  transform: translate(-50%, -50%) rotate(90deg);
  opacity: 0;
}
.faq-a {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height .35s var(--ease), opacity .25s, padding .25s;
}
.faq-item[open] .faq-a {
  max-height: 400px;
  opacity: 1;
  padding-bottom: 24px;
}
.faq-a p {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;
  color: var(--ink-soft);
  max-width: 62ch;
  margin: 0;
}
</style>
