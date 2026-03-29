import Accordion from '../components/Accordion';

function Business5() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto my-8">
      <div className="bg-gradient-to-r from-green-700 to-emerald-800 px-6 py-12 sm:px-12">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight mb-4">
          Terroir Connect
        </h1>
        <p className="text-xl text-green-100 max-w-3xl leading-relaxed">
          La marketplace d'épicerie fine qui connecte directement les producteurs locaux passionnés aux gastronomes, garantissant authenticité, circuit court et juste rémunération.
        </p>
      </div>

      <div className="px-6 py-8 sm:px-12 sm:py-10 bg-green-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Détails du projet
        </h2>

        <div className="space-y-4">
          <Accordion title="Le Problème Résolu" defaultOpen={true}>
             <p className="text-gray-600 leading-relaxed">
               Les consommateurs recherchent des produits artisanaux authentiques et locaux mais peinent à les trouver facilement au même endroit. De leur côté, les petits producteurs (miel, fromages affinés, charcuterie artisanale, vins nature) manquent de temps et de compétences digitales pour vendre en ligne et dépendent trop des intermédiaires qui écrasent leurs marges.
             </p>
          </Accordion>
          <Accordion title="La Solution Proposée">
             <p className="text-gray-600 leading-relaxed">
               Terroir Connect est une marketplace spécialisée. Nous gérons toute la partie digitale, le marketing et la logistique d'expédition pour le producteur. Le client final peut composer un "panier du terroir" multi-producteurs et se le faire livrer en une seule fois (via une solution logistique de groupage centralisée). Chaque produit est accompagné de l'histoire du producteur.
             </p>
          </Accordion>
          <Accordion title="Modèle Économique (Business Model)">
             <p className="text-gray-600 leading-relaxed">
               Un modèle de plateforme avec commission, pensé pour être juste :
             </p>
             <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
               <li>Commission de 15% à 20% sur chaque vente (nettement inférieure aux marges de la grande distribution).</li>
               <li>Frais d'abonnement mensuels minimes (freemium) pour les producteurs afin d'accéder à des outils de gestion de stock avancés ou à des mises en avant publicitaires.</li>
               <li>Offre B2B "Comités d'Entreprise" pour les paniers cadeaux de fin d'année, représentant des volumes très importants.</li>
             </ul>
          </Accordion>
          <Accordion title="Marché Cible & Concurrence">
             <p className="text-gray-600 leading-relaxed mb-4">
               <strong>Cible :</strong> Les "épicuriens" (30-60 ans), CSP+, prêts à payer plus cher pour la qualité, la traçabilité et le soutien à l'économie locale.
             </p>
             <p className="text-gray-600 leading-relaxed">
               <strong>Concurrence :</strong> Pourdebon (bien établi en France), La Ruche Qui Dit Oui (plus axé sur le frais hyper-local). Terroir Connect se focalisera sur des produits d'épicerie fine non périssables rapidement (longue conservation, expédition facile dans tout le pays, voire à l'international) et une charte de sélection drastique.
             </p>
          </Accordion>
          <Accordion title="Plan d'Exécution & Prochaines Étapes">
             <p className="text-gray-600 leading-relaxed">
               Le succès dépendra de l'acquisition rapide de producteurs de qualité :
             </p>
             <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
               <li>Mois 1-2 : Tour de France des producteurs pour onboarder les 50 premiers "Ambassadeurs" fondateurs.</li>
               <li>Mois 3-4 : Configuration de la marketplace (Mirakl ou solution Shopify multi-vendeurs) et shooting photo professionnel des produits.</li>
               <li>Mois 5 : Lancement avant les fêtes de fin d'année (période cruciale pour l'épicerie fine) avec une offre "Coffrets Cadeaux".</li>
               <li>Mois 6+ : Mise en place d'un réseau logistique de hub pour le groupage des commandes multi-producteurs.</li>
             </ul>
          </Accordion>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Soutenir nos producteurs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Business5;