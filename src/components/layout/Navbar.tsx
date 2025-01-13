import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, User, Gift, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeContext";
import { useAuth } from "@/components/utils/useAuth"; // Импортируем хук useAuth

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth(); // Используем хук useAuth

  const toggleMenu = () => setIsOpen(!isOpen);

  // Применение темы через CSS-переменные
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty("--background-color", "#283044");
      root.style.setProperty("--text-color", "#ebf5ee");
      root.style.setProperty("--border-color", "#ebf5ee");
    } else {
      root.style.setProperty("--background-color", "#ebf5ee");
      root.style.setProperty("--text-color", "#283044");
      root.style.setProperty("--border-color", "#283044");
    }
  }, [isDark]);

  return (
    <nav
      className="fixed top-0 w-full z-50 glass-panel"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
        border: "var(--border-color) 1px solid",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              FORAZZ PLAY
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
          </div>

          {/* Кнопка смены темы */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="nav-item"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Элементы для авторизованного пользователя */}
          {user ? (
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  style={{
                    backgroundColor: "var(--text-color)",
                    color: "var(--background-color)",
                  }}
                >
                  Deposit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  style={{
                    backgroundColor: "var(--text-color)",
                    color: "var(--background-color)",
                  }}
                >
                  Withdraw
                </Button>
                <span className="text-sm font-medium">{user.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">${user.balance}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={logout}
                className="nav-item"
              >
                <User  className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            // Кнопка "Войти" для неавторизова нного пользователя
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button variant="default">Sign In</Button>
              </Link>
            </div>
          )}

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
            <Link to="/bonuses" className="nav-item block flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span>Bonuses</span>
            </Link>
            <Link to="/divisions" className="nav-item block flex items-center gap-2">
              <Grid className="w-4 h-4" />
              <span>Divisions</span>
            </Link>
            <div className="nav-item block">Online: 1,234</div>
            {user && (
              <div className="px-2 py-3 border-t border-white/10">
                <div className="text-sm font-medium">{user.name}</div>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="text-sm">Balance: ${user.balance}</div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    style={{
                      backgroundColor: "var(--text-color)",
                      color: "var(--background-color)",
                    }}
                  >
                    Deposit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    style={{
                      backgroundColor: "var(--text-color)",
                      color: "var(--background-color)",
                    }}
                  >
                    Withdraw
                  </Button>
                </div>
              </div>
            )}
            <Link to="/profile" className="nav-item block">
              <User  className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            {!user && (
              <Link to="/login" className="nav-item block">
                <Button variant="default">Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};