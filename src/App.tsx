import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Expertise from './components/Expertise';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Expertise />
        <Services />
        <Differentials />
        <Gallery />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
