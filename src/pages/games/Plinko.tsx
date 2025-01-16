import { motion } from "framer-motion";
import { GamesSidebar } from "@/components/layout/GamesSidebar";

export const Plinko = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 glass-panel p-6">
        <h1 className="text-2xl font-bold mb-6">Plinko</h1>
        <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Game interface will be implemented here</p>
        </div>
      </div>
      <GamesSidebar />
    </div>
  );
};