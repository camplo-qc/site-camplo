export interface FaqEntry {
  q: string;
  a: string;
}

export const faqQuestions: FaqEntry[] = [
  {
    q: 'Je veux juste le site, ou juste le logiciel. Possible ?',
    a: "Oui à l'un comme à l'autre. Les deux s'emboîtent bien, mais rien ne vous oblige à prendre les deux. Le prix initial et le mensuel s'ajustent à ce que vous prenez.",
  },
  {
    q: 'Est-ce que je paie une commission par réservation ?',
    a: "Non. Jamais. Aucune commission, aucun frais de transaction. Votre seul coût récurrent, c'est l'abonnement mensuel au logiciel. Un montant fixe que vous connaissez d'avance, peu importe le volume de réservations.",
  },
  {
    q: "Et si je veux une fonction que vous n'avez pas ?",
    a: "Ça nous fait plaisir. Vous nous décrivez ce qui manque, on regarde si ça colle à l'esprit du produit, on revient avec un chemin et un devis. Les meilleures idées viennent des campings qu'on écoute.",
  },
  {
    q: 'Que se passe-t-il après la livraison ?',
    a: "On reste à vos côtés. Mises à jour, ajustements, questions un mardi soir, panne un samedi matin. On ne disparaît pas une fois le site en ligne.",
  },
];
