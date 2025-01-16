import { motion } from "framer-motion";
import { ArrowRight, Dice1, Box, Coins, Target } from "lucide-react";
import { GamesSidebar } from "@/components/layout/GamesSidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Home = () => {
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

  return (
    <div className="flex flex-col lg:flex-row gap-6">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Stats Section */}
        <section className="glass-panel p-6">
          <h2 className="text-2xl font-bold mb-6">Platform Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-primary/10">
              <Dice1 className="w-8 h-8 mb-2" />
              <p className="text-sm text-muted-foreground">Total Games</p>
              <p className="text-2xl font-bold">10,000+</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/10">
              <Box className="w-8 h-8 mb-2" />
              <p className="text-sm text-muted-foreground">Cases Opened</p>
              <p className="text-2xl font-bold">5,000+</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/10">
              <Coins className="w-8 h-8 mb-2" />
              <p className="text-sm text-muted-foreground">Total Winnings</p>
              <p className="text-2xl font-bold">$1M+</p>
            </div>
            <div className="p-4 rounded-lg bg-primary/10">
              <Target className="w-8 h-8 mb-2" />
              <p className="text-sm text-muted-foreground">Active Players</p>
              <p className="text-2xl font-bold">1,000+</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="glass-panel p-6">
          <h2 className="text-2xl font-bold mb-6">About Our Platform</h2>
          <div className="prose prose-invert max-w-none">
            <p>Welcome to our gaming platform! We offer a variety of exciting games and opportunities to win big prizes.</p>
            <p>Our platform features:</p>
            <ul>
              <li>Secure and fair gameplay</li>
              <li>Instant withdrawals</li>
              <li>24/7 customer support</li>
              <li>Regular tournaments and events</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <GamesSidebar />
    </div>
  );
};