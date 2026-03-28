import Accordion from '../components/Accordion';

function Business2() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto my-8">
      <div className="bg-gradient-to-r from-stone-800 to-neutral-900 px-6 py-12 sm:px-12">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight mb-4">
          Luxe & Loc
        </h1>
        <p className="text-xl text-stone-300 max-w-3xl leading-relaxed">
          Une plateforme de location de vêtements et accessoires de créateurs de luxe pour des événements spéciaux, promouvant une mode circulaire, accessible et élégante.
        </p>
      </div>

      <div className="px-6 py-8 sm:px-12 sm:py-10 bg-stone-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Détails du projet
        </h2>

        <div className="space-y-4">
          <Accordion title="Le Problème Résolu" defaultOpen={true}>
            <p className="text-gray-600 leading-relaxed mb-4">
              Acheter des tenues haut de gamme pour des occasions uniques (mariages, galas, soirées) est coûteux et souvent peu rentable, car ces vêtements sont rarement reportés.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Le coût d'achat de vêtements de créateurs est prohibitif pour la majorité des consommateurs.</li>
              <li>L'impact environnemental de la fast fashion est désastreux ; acheter des vêtements pour une seule occasion est un gaspillage.</li>
              <li>Les placards sont remplis de vêtements chers portés une seule fois.</li>
            </ul>
          </Accordion>

          <Accordion title="La Solution Proposée">
            <p className="text-gray-600 leading-relaxed">
              Luxe & Loc propose un service de location courte durée (4 à 8 jours) de robes de soirée, costumes et accessoires de grandes marques. Les utilisateurs peuvent parcourir un catalogue en ligne soigneusement sélectionné, louer la tenue de leurs rêves pour une fraction du prix d'achat, et la retourner simplement après leur événement. Le nettoyage pressing est inclus.
            </p>
          </Accordion>

          <Accordion title="Modèle Économique (Business Model)">
            <p className="text-gray-600 leading-relaxed">
              Le modèle économique repose sur la location et potentiellement un abonnement pour les clientes régulières :
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
              <li>Location à l'acte : Le client paie un tarif de location représentant environ 10% à 20% de la valeur au détail de l'article pour une durée de 4 ou 8 jours.</li>
              <li>Abonnement "Luxe Pass" : Un tarif mensuel permettant de louer jusqu'à 3 articles par mois.</li>
              <li>Assurance casse/tache : Une option facturée lors de la location pour couvrir les petits dommages.</li>
              <li>Vente de seconde main : Les articles d'anciennes collections sont vendus à prix réduit.</li>
            </ul>
          </Accordion>

          <Accordion title="Marché Cible & Concurrence">
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Cible :</strong> Principalement les femmes de 20 à 45 ans, urbaines, invitées à des événements habillés (mariages, remises de diplômes), sensibles à la mode mais soucieuses de leur budget et/ou de leur empreinte écologique.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Concurrence :</strong> Des acteurs comme Rent the Runway (aux US) ou Les Cachotières (en France) existent. Luxe & Loc se différenciera par un focus exclusif sur les marques de luxe de niche, les créateurs émergents et une expérience client "conciergerie" premium (essayage à domicile en option).
            </p>
          </Accordion>

          <Accordion title="Plan d'Exécution & Prochaines Étapes">
             <p className="text-gray-600 leading-relaxed">
              Le déploiement se fera par étapes pour valider le modèle avant d'investir massivement dans le stock :
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
              <li>Mois 1-2 : Acquisition d'un stock initial (MVP) composé de pièces de créateurs émergents via des partenariats (dépôt-vente ou achat wholesale).</li>
              <li>Mois 3 : Développement d'un site web vitrine avec un système de réservation basique (ex: Shopify + app de location).</li>
              <li>Mois 4 : Lancement d'un pop-up store éphémère à Paris pour générer du buzz, des essayages et acquérir les premiers clients.</li>
              <li>Mois 5-6 : Campagnes d'influence sur Instagram/TikTok axées sur le "look de la semaine" sans l'impact écologique de la fast fashion.</li>
            </ul>
          </Accordion>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-stone-800 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-stone-900 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-600">
            Découvrir la collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Business2;