import { Link } from 'react-router-dom';

function Home() {
  const businesses = [
    { id: 1, title: 'Éco-Café Box', description: 'Abonnement mensuel de cafés de spécialité torréfiés localement et issus du commerce équitable, livrés dans des emballages 100% compostables.', path: '/business/1', color: 'bg-amber-50 text-amber-700' },
    { id: 2, title: 'Luxe & Loc', description: 'Plateforme de location de vêtements et accessoires de créateurs pour événements spéciaux, favorisant une mode circulaire et accessible.', path: '/business/2', color: 'bg-stone-50 text-stone-700' },
    { id: 3, title: 'SmartSpace', description: 'Mobilier modulable et multifonctionnel conçu spécifiquement pour optimiser l\'espace des petits appartements urbains sans compromis sur le design.', path: '/business/3', color: 'bg-cyan-50 text-cyan-700' },
    { id: 4, title: 'DermaTech', description: 'Cosmétiques sur mesure formulés grâce à une analyse de la peau par IA via l\'appareil photo du smartphone de l\'utilisateur.', path: '/business/4', color: 'bg-fuchsia-50 text-fuchsia-700' },
    { id: 5, title: 'Terroir Connect', description: 'Marketplace d\'épicerie fine mettant en relation directe les producteurs locaux et les consommateurs amateurs de produits du terroir authentiques.', path: '/business/5', color: 'bg-green-50 text-green-700' },
  ];

  return (
    <div className="px-4 py-8 sm:px-0">
      <div className="text-center mb-16">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Portfolio d'idées de</span>{' '}
          <span className="block text-indigo-600 xl:inline">Business Innovants</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Découvrez 5 concepts d'entreprise uniques, prêts à être développés. Cliquez sur chaque carte pour explorer les détails, le modèle économique et le marché cible.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.map((business) => (
          <Link
            key={business.id}
            to={business.path}
            className="group block relative rounded-2xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-indigo-500 transition-all duration-200"
          >
            <div className={`inline-flex items-center justify-center p-3 rounded-xl shadow-sm mb-5 ${business.color}`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {business.title}
            </h3>
            <p className="text-base text-gray-500 line-clamp-3">
              {business.description}
            </p>
            <div className="mt-4 flex items-center text-sm font-medium text-indigo-600">
              Voir les détails
              <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
