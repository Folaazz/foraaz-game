import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              GameHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/games/plinko" className="nav-item">Plinko</Link>
              <Link to="/games/dice" className="nav-item">Dice</Link>
              <Link to="/games/roulette" className="nav-item">Roulette</Link>
              <Link to="/games/case" className="nav-item">Case</Link>
              <Link to="/games/coin-flip" className="nav-item">Coin Flip</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="nav-item"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="nav-item">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="nav-item"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-panel animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/games/plinko" className="nav-item block">Plinko</Link>
            <Link to="/games/dice" className="nav-item block">Dice</Link>
            <Link to="/games/roulette" className="nav-item block">Roulette</Link>
            <Link to="/games/case" className="nav-item block">Case</Link>
            <Link to="/games/coin-flip" className="nav-item block">Coin Flip</Link>
            <Link to="/profile" className="nav-item block">Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
};