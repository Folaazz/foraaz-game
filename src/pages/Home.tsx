import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Dice1, Box, Coins, Target } from "lucide-react";

export const Home = () => {
  const games = [
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
    {
      title: "Coin Flip",
      description: "Heads or tails? Make your choice!",
      icon: Coins,
      path: "/games/coin-flip",
    },
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to <span className="text-primary">GameHub</span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Experience the thrill of gaming with our collection of exciting games.
          Play now and win big!
        </motion.p>
      </section>

      {/* Games Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <motion.div
            key={game.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
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

      {/* Features Section */}
      <section className="glass-panel p-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
              <Coins className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Instant Withdrawals</h3>
            <p className="text-muted-foreground">Get your winnings instantly</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">Fair Games</h3>
            <p className="text-muted-foreground">Provably fair gaming system</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
              <Box className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-muted-foreground">Always here to help you</p>
          </div>
        </div>
      </section>
    </div>
  );
};