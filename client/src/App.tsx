import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Approach } from './components/Approach';
import { Services } from './components/Services';
import { Workflow } from './components/Workflow';
import { Team } from './components/Team';
import { Scaling } from './components/Scaling';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <Header />
        <Hero />
        <Approach />
        <Services />
        <Workflow />
        <Team />
        <Scaling />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
