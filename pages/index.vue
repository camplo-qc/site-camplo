<script setup lang="ts">
useHead({
  title: 'Camplo · Sites web et CRM pour campings indépendants du Québec',
})
</script>

<template>
  <div>
    <HeroSection />
    <PainSection />
    <ProductSection
      anchor-id="produits"
      eyebrow="Produit 1 · Site public"
      heading="Un site que vos <em>campeurs</em> utilisent réellement."
      kind="site"
      :paragraphs="[
        'Réservations en temps réel. Carte des emplacements. Paiement sécurisé avec Stripe. Conçu mobile d\'abord, parce que huit campeurs sur dix réservent de leur téléphone, le soir, pas de leur bureau.',
        'Chaque site est construit pour votre camping spécifiquement. Vos photos. Votre terrain. Votre langue.',
      ]"
      :labels="['Temps réel', 'Stripe', 'Mobile-first', 'Carte interactive']"
    />
    <ProductSection
      reverse
      eyebrow="Produit 2 · Logiciel de gestion"
      heading="Un logiciel qui ne dépend <em>pas d'internet</em>."
      kind="crm"
      :paragraphs="[
        'Votre CRM tourne sur votre ordinateur. Vos données restent à vous, sauvegardées localement, accessibles même quand le wifi tombe.',
        'Il se synchronise avec votre site de réservation quand vous êtes connectée. Il continue de fonctionner quand vous ne l\'êtes pas.',
      ]"
      :labels="['Local-first', 'Données à vous', 'Export PDF', 'Mises à jour auto']"
      class="no-top"
    />
    <ProofSection />
    <AboutSection />
    <FaqSection />
    <FinalCta />
  </div>
</template>

<style scoped>
:deep(.product.no-top) {
  border-top: none;
  padding-top: 0;
}
</style>
