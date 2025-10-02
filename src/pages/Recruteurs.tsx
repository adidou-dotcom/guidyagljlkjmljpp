import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Recruteurs = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Commencez gratuitement',
      features: [
        "2 offres d'emploi / stage",
        '1 utilisateur "Recruteur"',
        'Guidya Writer pour génération d\'offres',
        'Guidya Scout pour le sourcing des talents',
        'Page Entreprise',
        'Planification des entretiens'
      ],
      highlight: false
    },
    {
      name: 'Standard',
      price: '400 MAD',
      period: 'PAR MOIS payé annuellement',
      features: [
        "5 offres d'emploi / stage",
        '1 utilisateur "Recruteur"',
        '2 utilisateurs "Hiring Manager"',
        'Guidya Writer pour génération d\'offres',
        'Guidya Scout pour le sourcing des talents',
        'Page Entreprise',
        'Planification des entretiens'
      ],
      highlight: false
    },
    {
      name: 'Advanced',
      price: '700 MAD',
      period: 'PAR MOIS',
      features: [
        "10 offres d'emploi / stage",
        '2 utilisateurs "Recruteur"',
        '5 utilisateurs "Hiring Manager"',
        'Guidya Writer pour génération d\'offres',
        'Guidya Scout pour le sourcing des talents',
        'Page Entreprise',
        'Planification des entretiens'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Sur-mesure',
      features: [
        "Offres d'emploi / stage en illimité",
        'Utilisateurs "Recruteur" en illimité',
        'Utilisateurs "Hiring Manager" en illimité',
        'Guidya Writer pour génération d\'offres',
        'Guidya Scout pour le sourcing des talents',
        'Page Entreprise',
        'Planification des entretiens'
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">Guidya GenZ Connect</Link>
          <Link
            to="/signin"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            S'identifier
          </Link>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">
              Des abonnements transparents, sans surprise
            </h1>
            <p className="text-xl text-muted-foreground">
              Profitez de nos offres de lancement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg p-6 border ${
                  plan.highlight
                    ? 'border-primary shadow-lg scale-105'
                    : 'border-border'
                }`}
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                  {plan.period && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {plan.period}
                    </div>
                  )}
                  {plan.description && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {plan.description}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 rounded-md font-medium transition-opacity ${
                    plan.highlight
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'bg-secondary text-secondary-foreground hover:opacity-90'
                  }`}
                >
                  Choisir ce plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recruteurs;
