import Accordion from '../components/Accordion';

function Business6() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto my-8">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-12 sm:px-12">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight mb-4">
          SportEvent Pro
        </h1>
        <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
          L'agence spécialisée dans la création et l'organisation d'événements sportifs sur mesure : tournois amateurs, courses d'obstacles, et compétitions d'entreprise.
        </p>
      </div>

      <div className="px-6 py-8 sm:px-12 sm:py-10 bg-orange-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Détails du projet
        </h2>

        <div className="space-y-4">
          <Accordion title="Le Problème Résolu" defaultOpen={true}>
             <p className="text-gray-600 leading-relaxed">
               Organiser un événement sportif (course, tournoi de foot à 5, compétition d'e-sport ou olympiades d'entreprise) demande une logistique complexe : recherche de lieux, gestion des inscriptions, sécurité, assurance et animation. Les entreprises et clubs manquent souvent de temps et d'expertise pour créer des expériences mémorables sans friction.
             </p>
          </Accordion>
          <Accordion title="La Solution Proposée">
             <p className="text-gray-600 leading-relaxed">
               SportEvent Pro est une agence événementielle clé en main. Nous concevons le format sportif, gérons la plateforme d'inscription en ligne, la logistique terrain (matériel, arbitres, secouristes) et l'animation le jour J (DJ, speaker, remise des prix). Nous proposons des formats standards ou 100% personnalisés.
             </p>
          </Accordion>
          <Accordion title="Modèle Économique (Business Model)">
             <p className="text-gray-600 leading-relaxed">
               Le modèle repose sur plusieurs flux de revenus :
             </p>
             <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
               <li>Vente de billets/frais d'inscription pour les événements grand public (ex: courses à pied thématiques).</li>
               <li>Prestations B2B "Team Building" facturées au forfait (selon le nombre de participants et les options).</li>
               <li>Sponsoring et partenariats avec des marques locales ou sportives pour financer les événements grand public.</li>
             </ul>
          </Accordion>
          <Accordion title="Marché Cible & Concurrence">
             <p className="text-gray-600 leading-relaxed mb-4">
               <strong>Cible :</strong> Les entreprises (RH/CSE) cherchant des activités de cohésion, et les particuliers/sportifs amateurs à la recherche de nouveaux défis locaux.
             </p>
             <p className="text-gray-600 leading-relaxed">
               <strong>Concurrence :</strong> Les agences événementielles généralistes (souvent moins expertes en sport) et les grands organisateurs de courses (type Spartan Race, mais à une autre échelle). Notre force est la flexibilité et l'ancrage local.
             </p>
          </Accordion>
          <Accordion title="Plan d'Exécution & Prochaines Étapes">
             <p className="text-gray-600 leading-relaxed">
               Pour lancer l'activité rapidement :
             </p>
             <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
               <li>Mois 1 : Définir 3 offres "catalogue" (ex: Tournoi multi-sports, Course d'orientation urbaine, Olympiades sur plage).</li>
               <li>Mois 2 : Créer un événement vitrine grand public à petite échelle (ex: tournoi de padel local) pour créer du contenu photo/vidéo.</li>
               <li>Mois 3 : Lancer la prospection B2B avec la plaquette commerciale et le contenu de l'événement vitrine.</li>
               <li>Mois 4+ : Développer un réseau de prestataires fiables (lieux, traiteurs, secouristes, arbitres).</li>
             </ul>
          </Accordion>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            Organiser un événement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Business6;
