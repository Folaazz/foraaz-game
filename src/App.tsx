import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { Login } from "@/components/utils/Login";
import { Register } from "@/components/utils/Register";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";
import { Plinko } from "@/pages/games/Plinko";
import { Dice } from "@/pages/games/Dice";
import { Roulette } from "@/pages/games/Roulette";
import { Case } from "@/pages/games/Case";
import { CoinFlip } from "@/pages/games/CoinFlip";
import { ThemeProvider } from "@/components/layout/ThemeContext"; // Импортируем ThemeProvider

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider> {/* Обернули всё приложение в ThemeProvider */}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <Navbar />
              <main className="pt-20 px-4 max-w-7xl mx-auto">
                <PageTransition>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/games/plinko" element={<Plinko />} />
                    <Route path="/games/dice" element={<Dice />} />
                    <Route path="/games/roulette" element={<Roulette />} />
                    <Route path="/games/case" element={<Case />} />
                    <Route path="/games/coin-flip" element={<CoinFlip />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                  </Routes>
                </PageTransition>
              </main>
            </div>
            <Toaster />
            <Sonner />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;