import Accordion from '../components/Accordion';

function Business1() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto my-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-12 sm:px-12">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight mb-4">
          Business Idea 1
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
          Le concept de l'idée numéro 1 détaillé ici en quelques lignes accrocheuses. C'est l'elevator pitch du projet.
        </p>
      </div>

      <div className="px-6 py-8 sm:px-12 sm:py-10 bg-gray-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Détails du projet
        </h2>

        <div className="space-y-4">
          <Accordion title="Le Problème Résolu" defaultOpen={true}>
            <p className="text-gray-600 leading-relaxed mb-4">
              Description détaillée du problème que ce business cherche à résoudre.
              Quels sont les "pain points" actuels des utilisateurs ou des clients potentiels ?
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Point de douleur 1</li>
              <li>Point de douleur 2</li>
              <li>Point de douleur 3</li>
            </ul>
          </Accordion>

          <Accordion title="La Solution Proposée">
            <p className="text-gray-600 leading-relaxed">
              Comment le produit ou le service répond au problème. Explication du fonctionnement
              général, de la proposition de valeur unique et des fonctionnalités clés.
            </p>
          </Accordion>

          <Accordion title="Modèle Économique (Business Model)">
            <p className="text-gray-600 leading-relaxed">
              Comment l'entreprise va générer de l'argent. Exemples :
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-2">
              <li>Abonnement mensuel (SaaS)</li>
              <li>Vente à l'unité</li>
              <li>Commission sur transaction</li>
              <li>Modèle Freemium</li>
            </ul>
          </Accordion>

          <Accordion title="Marché Cible & Concurrence">
            <p className="text-gray-600 leading-relaxed">
              Qui sont les clients ? Quelle est la taille du marché ? Qui sont les concurrents
              actuels et comment ce business se différencie-t-il d'eux ?
            </p>
          </Accordion>

          <Accordion title="Plan d'Exécution & Prochaines Étapes">
            <p className="text-gray-600 leading-relaxed">
              Quelles sont les étapes pour lancer ce projet ? (MVP, recherche de financement,
              développement, lancement marketing, etc.)
            </p>
          </Accordion>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Je suis intéressé(e)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Business1;
