import Accordion from '../components/Accordion';

function Business1() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto my-8">
      <div className="bg-gradient-to-r from-amber-700 to-orange-800 px-6 py-12 sm:px-12">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight mb-4">
          Éco-Café Box
        </h1>
        <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
          Un abonnement mensuel de cafés de spécialité éthiques, fraîchement torréfiés et livrés dans des emballages 100% compostables pour une consommation responsable.
        </p>
      </div>

      <div className="px-6 py-8 sm:px-12 sm:py-10 bg-orange-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Détails du projet
        </h2>

        <div className="space-y-4">
          <Accordion title="Le Problème Résolu" defaultOpen={true}>
            <p className="text-gray-600 leading-relaxed mb-4">
              L'industrie du café génère des tonnes de déchets d'emballages non recyclables chaque année. De plus, les consommateurs ont souvent du mal à trouver du café de spécialité éthique et fraîchement torréfié sans se déplacer dans des boutiques spécialisées.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Capsules et emballages de café polluants (plastique, aluminium).</li>
              <li>Manque de transparence sur l'origine et la rémunération des producteurs.</li>
              <li>Difficulté à conserver la fraîcheur des grains achetés en grande surface.</li>
            </ul>
          </Accordion>

          <Accordion title="La Solution Proposée">
            <p className="text-gray-600 leading-relaxed">
              Éco-Café Box propose une solution clé en main : une box mensuelle contenant des cafés de spécialité sélectionnés avec soin. Les grains sont torréfiés localement juste avant l'expédition pour garantir une fraîcheur optimale. L'innovation majeure réside dans notre packaging 100% compostable à domicile, fabriqué à partir de matières végétales, éliminant ainsi totalement les déchets plastiques.
            </p>
          </Accordion>

          <Accordion title="Modèle Économique (Business Model)">
            <p className="text-gray-600 leading-relaxed">
              Le modèle repose sur des revenus récurrents et des ventes ponctuelles :
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
              <li>Abonnements mensuels (Engagement 3, 6 ou 12 mois avec tarifs dégressifs).</li>
              <li>Ventes à l'unité sur notre boutique en ligne pour les non-abonnés.</li>
              <li>Vente de matériel (moulins manuels, cafetières à piston, filtres réutilisables).</li>
              <li>Partenariats B2B pour approvisionner les entreprises soucieuses de leur RSE.</li>
            </ul>
          </Accordion>

          <Accordion title="Marché Cible & Concurrence">
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Cible :</strong> Les amateurs de café âgés de 25 à 45 ans, urbains, sensibles aux enjeux environnementaux et prêts à payer un prix premium pour la qualité et l'éthique.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Concurrence :</strong> Bien qu'il existe d'autres abonnements de café (MokaBox, Kawa), notre différenciation se fait par l'approche zéro déchet absolu (emballage compostable) et un sourcing exclusivement axé sur le commerce équitable et l'agriculture biologique certifiée.
            </p>
          </Accordion>

          <Accordion title="Plan d'Exécution & Prochaines Étapes">
            <p className="text-gray-600 leading-relaxed">
              Le lancement est prévu en plusieurs phases stratégiques :
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
              <li>Mois 1-2 : Sourcing des producteurs et développement du packaging compostable.</li>
              <li>Mois 3 : Création du site e-commerce (Shopify) et campagne de pré-lancement (landing page).</li>
              <li>Mois 4 : Lancement d'une campagne de crowdfunding (Ulule/Kickstarter) pour valider l'intérêt et financer le premier stock.</li>
              <li>Mois 5 : Expédition des premières box et lancement des campagnes d'acquisition (Meta Ads, Influenceurs food/écolo).</li>
            </ul>
          </Accordion>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
            S'abonner maintenant
          </button>
        </div>
      </div>
    </div>
  );
}

export default Business1;