import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Dice1, Box, Coins, Target } from "lucide-react";
import { GamesSidebar } from "@/components/layout/GamesSidebar";
import { useTheme } from "@/components/layout/ThemeContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Home = () => {
  const { isDark } = useTheme(); // Получаем текущую тему
  const slides = [
    {
      title: "Welcome Bonus",
      description: "Get 100% bonus on your first deposit",
      image: "/placeholder.svg",
    },
    {
      title: "Weekly Tournaments",
      description: "Join our weekly tournaments and win big prizes",
      image: "/placeholder.svg",
    },
    {
      title: "VIP Program",
      description: "Become a VIP member and get exclusive benefits",
      image: "/placeholder.svg",
    },
  ];

    // Эффект для изменения темы
    useEffect(() => {
      const root = document.documentElement;
      if (isDark) {
        root.style.setProperty("--background-color", "#040f16"); // Темный фон
        root.style.setProperty("--text-color", "#fbfbff"); // Белый текст
      } else {
        root.style.setProperty("--background-color", "#fbfbff"); // Светлый фон
        root.style.setProperty("--text-color", "#040f16"); // Черный текст
      }
    }, [isDark]);

  return (
    <div className="flex flex-col lg:flex-row gap-6" style={{
      backgroundColor: "var(--background-color)",
      color: "var(--text-color)",
    }}>
      {/* Main Content */}
      <div className="flex-1 space-y-8">
        {/* Slideshow Section */}
        <section className="glass-panel p-4">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="flex aspect-video items-center justify-center p-6 relative overflow-hidden rounded-xl">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-6">
                        <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-center">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
            style={{ left: "20px" }}/>
            <CarouselNext 
            style={{ right: "20px" }}/>
          </Carousel>
        </section>

        {/* Stats Section */}
        <section className="glass-panel p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center">Platform Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$1M+</div>
              <div className="text-sm text-muted-foreground">Total Withdrawals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Active Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100K+</div>
              <div className="text-sm text-muted-foreground">Games Played</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="glass-panel p-8 space-y-6">
          <h2 className="text-2xl font-bold text-center">About GameHub</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            GameHub is your premier destination for online gaming entertainment.
            We offer a wide variety of games, instant withdrawals, and a secure
            gaming environment.
          </p>
        </section>

        {/* Featured Games Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Plinko",
              description: "Drop the ball and watch it bounce!",
              icon: Target,
              path: "/games/plinko",
            },
            {
              title: "Dice",
              description: "Roll the dice and test your luck!",
              icon: Dice1,
              path: "/games/dice",
            },
            {
              title: "Case Opening",
              description: "Open cases and win amazing prizes!",
              icon: Box,
              path: "/games/case",
            },
          ].map((game) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={game.path} className="block">
                <div className="game-card group">
                  <game.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                  <p className="text-muted-foreground mb-4">{game.description}</p>
                  <div className="flex items-center text-primary">
                    Play Now
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </div>

      {/* Games Sidebar */}
      <GamesSidebar />
    </div>
  );
};