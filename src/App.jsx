import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import PricingAndSocialProof from './components/PricingAndSocialProof';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white scroll-smooth">
      <Hero />
      <Features />
      <HowItWorks />
      <PricingAndSocialProof />

      <footer className="border-t border-white/10 bg-gray-950/80">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <nav className="flex flex-wrap items-center gap-6 text-sm text-white/70">
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#privacy" className="hover:text-white transition">Privacy</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
              <a href="#faq" className="hover:text-white transition">FAQs</a>
            </nav>
            <p className="text-xs text-white/60">© {new Date().getFullYear()} AutoDM, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
