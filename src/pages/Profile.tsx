import { motion } from "framer-motion";
import { User, Wallet, History } from "lucide-react";

export const Profile = () => {
  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <section className="glass-panel p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-12 h-12 text-primary" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-2xl font-bold">User Profile</h1>
            <p className="text-muted-foreground">Member since 2024</p>
          </div>
        </div>
      </section>

      {/* Balance Section */}
      <section className="glass-panel p-6">
        <div className="flex items-center gap-4 mb-4">
          <Wallet className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Balance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-primary/10">
            <p className="text-sm text-muted-foreground">Current Balance</p>
            <p className="text-2xl font-bold">$0.00</p>
          </div>
          <div className="p-4 rounded-lg bg-primary/10">
            <p className="text-sm text-muted-foreground">Total Winnings</p>
            <p className="text-2xl font-bold">$0.00</p>
          </div>
        </div>
      </section>

      {/* Game History */}
      <section className="glass-panel p-6">
        <div className="flex items-center gap-4 mb-4">
          <History className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Game History</h2>
        </div>
        <div className="text-center text-muted-foreground py-8">
          No games played yet
        </div>
      </section>
    </div>
  );
};