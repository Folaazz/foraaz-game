import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Dice1, Box, Coins, Target } from "lucide-react";
import { GamesSidebar } from "@/components/layout/GamesSidebar";

export const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Main Content */}
      <div className="flex-1 space-y-8">
        {/* Slideshow Section */}
        <section className="glass-panel p-4 h-[300px] flex items-center justify-center">
          <p className="text-muted-foreground">Slideshow will be implemented here</p>
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