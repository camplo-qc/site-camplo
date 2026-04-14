<script setup lang="ts">
</script>

<template>
  <div class="mock-crm">
    <div class="mock-crm-top">
      <span class="mock-crm-dot r" />
      <span class="mock-crm-dot y" />
      <span class="mock-crm-dot g" />
      <span class="mock-crm-title">Camplo · Votre camping</span>
    </div>
    <div class="mock-crm-body">
      <div class="mock-crm-side">
        <div class="mock-crm-item">Tableau de bord</div>
        <div class="mock-crm-item active">Réservations</div>
        <div class="mock-crm-item">Clients</div>
        <div class="mock-crm-item">Emplacements</div>
        <div class="mock-crm-item">Rapports</div>
      </div>
      <div class="mock-crm-main">
        <div class="mock-crm-main-h">Arrivées, 13 août</div>
        <div class="mock-crm-main-rows">
          <div class="mock-crm-main-row">
            <span>Famille Gagnon</span>
            <span class="badge">Payé</span>
          </div>
          <div class="mock-crm-main-row">
            <span>Tremblay, M.</span>
            <span class="badge">Payé</span>
          </div>
          <div class="mock-crm-main-row">
            <span>Dubé, Caroline</span>
            <span class="badge fern">Acompte</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mock-crm {
  width: 100%;
  height: 100%;
  background: var(--color-fern-deep);
  display: flex;
  flex-direction: column;
  color: var(--color-paper);
  font-family: var(--font-body);
}
.mock-crm-top {
  padding: 11px 16px;
  background: rgba(0, 0, 0, .28);
  display: flex;
  gap: 6px;
  align-items: center;
}
.mock-crm-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.mock-crm-dot.r { background: #ff5f57; }
.mock-crm-dot.y { background: #febc2e; }
.mock-crm-dot.g { background: #28c840; }
.mock-crm-title {
  margin-left: 12px;
  font-size: 11px;
  color: rgba(246, 240, 224, 0.6);
  letter-spacing: .06em;
}
.mock-crm-body {
  flex: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 16px;
}
.mock-crm-side { font-size: 12px; }
.mock-crm-item {
  padding: 6px 10px;
  margin-bottom: 3px;
  color: rgba(246, 240, 224, 0.55);
}
.mock-crm-item.active {
  background: var(--color-marmalade);
  color: var(--color-paper);
  font-weight: 700;
}
.mock-crm-main {
  background: rgba(246, 240, 224, 0.05);
  padding: 16px;
  border-left: 1px solid rgba(246, 240, 224, 0.08);
}
.mock-crm-main-h {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -.015em;
}
.mock-crm-main-rows {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.mock-crm-main-row {
  display: flex;
  justify-content: space-between;
  padding: 7px 11px;
  background: rgba(246, 240, 224, 0.06);
  font-size: 12px;
}
.badge {
  padding: 2px 8px;
  background: var(--color-marmalade);
  color: var(--color-paper);
  font-weight: 700;
  font-size: 10px;
  letter-spacing: .08em;
}
.badge.fern { background: var(--color-fern); }
</style>
