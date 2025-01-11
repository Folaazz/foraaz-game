import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const games = [
  { title: "Plinko", path: "/games/plinko" },
  { title: "Dice", path: "/games/dice" },
  { title: "Roulette", path: "/games/roulette" },
  { title: "Case Opening", path: "/games/case" },
  { title: "Coin Flip", path: "/games/coin-flip" },
];

export const GamesSidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-full lg:w-1/5 glass-panel p-4 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>
      <nav className="space-y-2">
        {filteredGames.map((game) => (
          <Link
            key={game.path}
            to={game.path}
            className="block w-full p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {game.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};