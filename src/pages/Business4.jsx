import Accordion from '../components/Accordion';

function Business4() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto my-8">
      <div className="bg-gradient-to-r from-fuchsia-600 to-pink-700 px-6 py-12 sm:px-12">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight mb-4">
          DermaTech
        </h1>
        <p className="text-xl text-fuchsia-100 max-w-3xl leading-relaxed">
          Une marque de dermo-cosmétique qui utilise l'intelligence artificielle pour analyser la peau via smartphone et formuler des soins 100% sur mesure.
        </p>
      </div>

      <div className="px-6 py-8 sm:px-12 sm:py-10 bg-fuchsia-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-fuchsia-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          Détails du projet
        </h2>

        <div className="space-y-4">
          <Accordion title="Le Problème Résolu" defaultOpen={true}>
             <p className="text-gray-600 leading-relaxed">
               Chaque peau est unique (génétique, environnement, âge, stress), pourtant l'industrie cosmétique propose des produits standardisés. Trouver la bonne routine de soin est souvent un parcours du combattant coûteux (essais d'innombrables produits, réactions allergiques, inefficacité).
             </p>
          </Accordion>
          <Accordion title="La Solution Proposée">
             <p className="text-gray-600 leading-relaxed">
               L'utilisateur prend un selfie via l'application DermaTech. L'IA (entraînée par des dermatologues) analyse l'hydratation, les rides, les taches, l'acné, etc. Un algorithme génère alors une formule unique avec les principes actifs exacts dont la peau a besoin. Le produit (crème ou sérum) est fabriqué à la demande en laboratoire et expédié sous 48h, avec le nom du client sur le flacon.
             </p>
          </Accordion>
          <Accordion title="Modèle Économique (Business Model)">
             <p className="text-gray-600 leading-relaxed">
               Un modèle D2C (Direct-to-Consumer) fortement axé sur la rétention :
             </p>
             <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
               <li>Achat à l'unité de la crème ou du sérum personnalisé (Panier moyen élevé : 50-80€).</li>
               <li>Abonnement "Routine" avec livraison automatique tous les mois ou deux mois, la formule s'adaptant aux saisons (ex: plus hydratante en hiver).</li>
               <li>Vente croisée de produits "essentiels" (nettoyant doux universel, crème solaire).</li>
             </ul>
          </Accordion>
          <Accordion title="Marché Cible & Concurrence">
             <p className="text-gray-600 leading-relaxed mb-4">
               <strong>Cible :</strong> Femmes et hommes (25-55 ans) frustrés par la cosmétique traditionnelle, ayant des problèmes de peau spécifiques ou recherchant l'efficacité d'une approche scientifique ("skintellectuals").
             </p>
             <p className="text-gray-600 leading-relaxed">
               <strong>Concurrence :</strong> Typology, The Ordinary (sur le côté scientifique/transparence) et des acteurs de la beauty-tech comme Prose ou Function of Beauty (qui font ça pour les cheveux). DermaTech se distingue par la fabrication réellement sur mesure de soins visage complexes.
             </p>
          </Accordion>
          <Accordion title="Plan d'Exécution & Prochaines Étapes">
             <p className="text-gray-600 leading-relaxed">
               Un projet nécessitant un financement plus important pour la R&D :
             </p>
             <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
               <li>Mois 1-4 : Développement de l'algorithme d'analyse d'image (licence API existante type Haut.ai ou développement in-house) et partenariat avec un laboratoire cosmétique en marque blanche.</li>
               <li>Mois 5 : Création de l'application web (PWA) pour l'analyse et la commande.</li>
               <li>Mois 6 : Beta test fermé avec 100 utilisateurs pour affiner l'IA et recueillir des témoignages "Avant/Après" crédibles.</li>
               <li>Mois 7+ : Lancement public avec forte stratégie RP (Relations Presse) et campagnes Facebook/TikTok Ads centrées sur l'innovation.</li>
             </ul>
          </Accordion>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-fuchsia-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-fuchsia-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500">
            Faire mon diagnostic
          </button>
        </div>
      </div>
    </div>
  );
}

export default Business4;