import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Hero } from './sections/Hero';
import { TrustPillars } from './sections/TrustPillars';
import { Services } from './sections/Services';
import { Blog } from './sections/Blog';
import { FAQ } from './sections/FAQ';
import { SocialProof } from './sections/SocialProof';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-brand-cream">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustPillars />
        <Services />
        <Blog />
        <FAQ />
        <SocialProof />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
