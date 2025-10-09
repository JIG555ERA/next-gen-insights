import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white">NG</span>
            </div>
            <div>
              <h1 className="text-primary">NextGen Insights</h1>
              <p className="text-xs text-muted-foreground">Future Ready Marketing</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('workflow')} className="text-foreground hover:text-primary transition-colors">
              Workflow
            </button>
            <button onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection('scaling')} className="text-foreground hover:text-primary transition-colors">
              Scaling
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button onClick={() => scrollToSection('contact')}>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('workflow')} className="text-left text-foreground hover:text-primary transition-colors">
              Workflow
            </button>
            <button onClick={() => scrollToSection('team')} className="text-left text-foreground hover:text-primary transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection('scaling')} className="text-left text-foreground hover:text-primary transition-colors">
              Scaling
            </button>
            <Button onClick={() => scrollToSection('contact')}>Get Started</Button>
          </nav>
        )}
      </div>
    </header>
  );
}
