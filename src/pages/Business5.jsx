import Accordion from '../components/Accordion';

function Business5() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto my-8">
      <div className="bg-gradient-to-r from-rose-600 to-pink-700 px-6 py-12 sm:px-12">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight mb-4">
          Business Idea 5
        </h1>
        <p className="text-xl text-rose-100 max-w-3xl leading-relaxed">
          Le concept de l'idée numéro 5 détaillé ici en quelques lignes accrocheuses. C'est l'elevator pitch du projet.
        </p>
      </div>

      <div className="px-6 py-8 sm:px-12 sm:py-10 bg-gray-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Détails du projet
        </h2>

        <div className="space-y-4">
          <Accordion title="Le Problème Résolu" defaultOpen={true}>
             <p className="text-gray-600 leading-relaxed">Détails à fournir à la prochaine étape.</p>
          </Accordion>
          <Accordion title="La Solution Proposée">
             <p className="text-gray-600 leading-relaxed">Détails à fournir à la prochaine étape.</p>
          </Accordion>
          <Accordion title="Modèle Économique (Business Model)">
             <p className="text-gray-600 leading-relaxed">Détails à fournir à la prochaine étape.</p>
          </Accordion>
          <Accordion title="Marché Cible & Concurrence">
             <p className="text-gray-600 leading-relaxed">Détails à fournir à la prochaine étape.</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Business5;