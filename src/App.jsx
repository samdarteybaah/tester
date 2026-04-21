import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Approach from './components/Approach';
import Careers from './components/Careers';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-field-950 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Approach />
        <Careers />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
