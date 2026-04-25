// Schémas JSON-LD réutilisables. Centralisés ici pour que :
// - Layout.astro émette uniquement les entités site-wide (Organization, WebSite, LocalBusiness, FAQPage).
// - Chaque page injecte les schémas spécifiques à son contenu (SoftwareApplication, WebPage, BreadcrumbList).
// Évite la pollution d'entités cross-page.

export const SITE_URL = 'https://www.camplo.ca';

export const crmSoftwareApplication = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#crm`,
  name: 'Camplo CRM',
  alternateName: 'Camplo — Logiciel de gestion camping',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Windows, macOS',
  description:
    "Application desktop de gestion de camping (réservations, clients, emplacements, fiscalité TPS/TVQ) sans stockage en nuage — vos données restent sur place.",
  provider: { '@id': `${SITE_URL}/#organization` },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'CAD',
    description: 'Abonnement mensuel fixe, aucune commission par réservation',
  },
};

export const siteSoftwareApplication = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#site`,
  name: 'Camplo — Site de réservation camping',
  alternateName: 'Camplo Site',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    "Site de réservation en ligne pour campings indépendants. Paiement Stripe intégré, confirmation automatique, aucune commission par réservation.",
  provider: { '@id': `${SITE_URL}/#organization` },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'CAD',
    description: 'Frais initial + abonnement mensuel, aucune commission',
  },
};

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumb(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface WebPageMeta {
  url: string;
  name: string;
  description: string;
  about?: string;
  dateModified?: string;
}

export function buildWebPage({ url, name, description, about, dateModified }: WebPageMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'fr-CA',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    ...(about ? { about: { '@id': about } } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}
