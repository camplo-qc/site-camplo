<script setup lang="ts">
</script>

<template>
  <section class="pain" aria-labelledby="pain-title" id="approche">
    <div class="wrap">
      <div class="eyebrow reveal">Le quotidien avant Camplo</div>
      <div class="pain-grid">
        <div class="pain-col reveal">
          <h2 id="pain-title" class="pain-heading">Trois scènes. Peut-être familières.</h2>
          <div class="pain-item">
            Vous passez <em>dix heures par semaine</em> à transcrire des
            réservations téléphoniques dans un cahier.
          </div>
          <div class="pain-item">
            Un client arrive avec une réservation que
            <em>personne n'a enregistrée</em>. Ça arrive deux fois par été.
          </div>
          <div class="pain-item">
            Votre logiciel vient d'un CD que votre beau-frère a installé en
            2012. <em>Il ne fonctionne plus</em> sur le nouveau portable.
          </div>
        </div>
        <div class="pain-col reveal" style="padding-top: 8px">
          <p>
            On a passé assez de temps dans des campings pour savoir que ce
            n'est pas une question d'effort. C'est une question d'outils.
          </p>
          <p>
            Les solutions actuelles sont soit trop grosses, soit trop
            vieilles, soit simplement pas en français.
          </p>
          <p>
            70% de vos campeurs veulent réserver de leur cellulaire, le soir,
            sans appeler. Ils vont chez le voisin si votre site ne le permet
            pas.
          </p>
          <p class="close">On a construit ce qu'il vous manque.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pain {
  padding: clamp(100px, 12vw, 160px) 0;
  border-top: 1px solid var(--rule);
}
.pain-heading {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(30px, 3.4vw, 48px);
  letter-spacing: -.018em;
  line-height: 1.05;
  color: var(--color-ink);
  margin-bottom: 28px;
}
.pain-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: start;
  margin-top: clamp(40px, 4vw, 56px);
}
.pain-item {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(20px, 2vw, 28px);
  line-height: 1.24;
  color: var(--color-ink);
  padding: 24px 0;
  border-top: 1px solid var(--rule);
}
.pain-item:first-child { border-top: none; padding-top: 0; }
.pain-item em {
  font-style: italic;
  color: var(--color-marmalade);
  font-weight: 500;
}
.pain-col p {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 17px;
  line-height: 1.62;
  color: var(--ink-soft);
  margin: 0 0 20px;
}
.pain-col p.close {
  color: var(--color-ink);
  font-weight: 700;
}

@media (max-width: 900px) {
  .pain-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>
