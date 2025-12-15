import { Link } from 'react-router-dom';
import LogosMarquee from '../components/ui/logos-marquee';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Guidya GenZ Connect</h1>
          <Link
            to="/signin"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            S'identifier
          </Link>
        </div>
      </header>
      
      <main>
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Connectez-vous avec votre établissement
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Rejoignez le réseau des étudiants et découvrez les opportunités qui vous attendent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/jobs"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:opacity-90 transition-opacity font-medium text-lg"
              >
                Trouver un job
              </Link>
              <Link
                to="/recruteurs"
                className="border border-primary text-primary px-8 py-3 rounded-md hover:bg-primary/10 transition-colors font-medium text-lg"
              >
                Découvrir les entreprises
              </Link>
            </div>
          </div>
        </section>
        
        <LogosMarquee />
      </main>
    </div>
  );
};

export default Home;
