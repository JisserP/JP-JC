import Accordion from '../components/Accordion';

function Business2() {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl mx-auto my-8">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-12 sm:px-12">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl tracking-tight mb-4">
          Business Idea 2
        </h1>
        <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">
          Le concept de l'idée numéro 2 détaillé ici en quelques lignes accrocheuses. C'est l'elevator pitch du projet.
        </p>
      </div>

      <div className="px-6 py-8 sm:px-12 sm:py-10 bg-gray-50/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

export default Business2;