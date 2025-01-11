import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, User, Gift, Grid, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  // Temporary mock data - replace with actual auth state later
  const user = {
    name: "John Doe",
    balance: 1000
  };

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
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/bonuses" className="nav-item flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span>Bonuses</span>
            </Link>
            <Link to="/divisions" className="nav-item flex items-center gap-2">
              <Grid className="w-4 h-4" />
              <span>Divisions</span>
            </Link>
            <div className="nav-item flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Online: 1,234</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{user.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">${user.balance}</span>
                    <Button variant="outline" size="sm">Deposit</Button>
                    <Button variant="outline" size="sm">Withdraw</Button>
                  </div>
                </div>
              </>
            ) : (
              <Button variant="default">Sign In</Button>
            )}
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
            <Link to="/bonuses" className="nav-item block">Bonuses</Link>
            <Link to="/divisions" className="nav-item block">Divisions</Link>
            <div className="nav-item block">Online: 1,234</div>
            {user && (
              <div className="px-2 py-3 border-t border-white/10">
                <div className="text-sm font-medium">{user.name}</div>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="text-sm">Balance: ${user.balance}</div>
                  <Button variant="outline" size="sm" className="w-full">Deposit</Button>
                  <Button variant="outline" size="sm" className="w-full">Withdraw</Button>
                </div>
              </div>
            )}
            <Link to="/profile" className="nav-item block">Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
};