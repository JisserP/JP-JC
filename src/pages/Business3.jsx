import Accordion from '../components/Accordion';

function Business3() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto my-8">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-12 sm:px-12">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight mb-4">
          SmartSpace
        </h1>
        <p className="text-xl text-cyan-100 max-w-3xl leading-relaxed">
          Du mobilier design, astucieux et modulable, pensé spécifiquement pour maximiser chaque mètre carré des petits appartements urbains.
        </p>
      </div>

      <div className="px-6 py-8 sm:px-12 sm:py-10 bg-cyan-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
          Détails du projet
        </h2>

        <div className="space-y-4">
          <Accordion title="Le Problème Résolu" defaultOpen={true}>
             <p className="text-gray-600 leading-relaxed">
               Avec l'augmentation du prix de l'immobilier en ville, les citadins vivent dans des surfaces de plus en plus petites. Le mobilier standard est trop encombrant, inadapté et ne permet pas d'optimiser l'espace, obligeant souvent à faire des compromis (ex: pas de coin bureau ou pas de table pour recevoir).
             </p>
          </Accordion>
          <Accordion title="La Solution Proposée">
             <p className="text-gray-600 leading-relaxed">
               SmartSpace crée et distribue une ligne de meubles escamotables et multifonctions au design épuré et moderne (ex: table basse se transformant en table à manger pour 6 personnes, lit mural avec canapé intégré, bureau rabattable étagère). Tous les meubles sont livrés pré-assemblés et faciles à installer.
             </p>
          </Accordion>
          <Accordion title="Modèle Économique (Business Model)">
             <p className="text-gray-600 leading-relaxed">
               Le business model principal est de type D2C (Direct to Consumer) avec des marges élevées dues à la suppression des intermédiaires :
             </p>
             <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
               <li>Vente directe en ligne via une boutique e-commerce immersive (modèles 3D/AR).</li>
               <li>Partenariats B2B (promoteurs immobiliers, résidences étudiantes, hôtels) pour meubler en gros des studios et micro-appartements.</li>
               <li>Services complémentaires : Conseils en aménagement d'intérieur facturés à l'heure ou forfaits "clé en main".</li>
             </ul>
          </Accordion>
          <Accordion title="Marché Cible & Concurrence">
             <p className="text-gray-600 leading-relaxed mb-4">
               <strong>Cible :</strong> Jeunes actifs urbains (25-40 ans) vivant dans des studios ou T2 (15 à 40m²) dans les grandes métropoles, locataires ou primo-accédants cherchant à investir dans du mobilier durable et esthétique.
             </p>
             <p className="text-gray-600 leading-relaxed">
               <strong>Concurrence :</strong> Ikea, avec ses solutions petits espaces, reste le leader mondial. Des acteurs de niche comme Resource Furniture (US) existent, mais souvent très onéreux. SmartSpace se positionne en "Ikea premium", misant sur la robustesse et des mécanismes innovants à un prix milieu/haut de gamme accessible.
             </p>
          </Accordion>
          <Accordion title="Plan d'Exécution & Prochaines Étapes">
             <p className="text-gray-600 leading-relaxed">
               Le lancement nécessitera des compétences en design produit et une forte stratégie de contenu :
             </p>
             <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
               <li>Mois 1-3 : Prototypage de la "Hero Product" (ex: la table basse/à manger magique) et dépôt de brevet si mécanisme unique.</li>
               <li>Mois 4 : Production de vidéos virales ("Avant/Après", démonstration du mécanisme) pour les réseaux sociaux (TikTok/Instagram Reels).</li>
               <li>Mois 5 : Lancement d'un Kickstarter pour financer la première production de masse, tout en limitant les risques de stock.</li>
               <li>Mois 6+ : Ouverture du e-commerce avec intégration d'outils AR (Réalité Augmentée) pour visualiser le meuble chez soi.</li>
             </ul>
          </Accordion>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-cyan-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            Voir le catalogue 3D
          </button>
        </div>
      </div>
    </div>
  );
}

export default Business3;