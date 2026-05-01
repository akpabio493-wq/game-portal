import { useState, useEffect } from "react";
import { Play, Loader2 } from "lucide-react";

/**
 * Dark Gaming Aesthetic Design
 * - Deep navy-black background with neon purple accents
 * - Glowing card borders and smooth animations
 * - Responsive grid layout for mobile and desktop
 * - Smooth hover effects and loading states
 */

interface Game {
  id: string;
  title: string;
  image: string;
  url: string;
  category?: string;
}

// Game data - easily editable section
const GAMES: Game[] = [
  {
    id: "car-racing",
    title: "Car Racing",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663590680077/TpvmP9NbeF3CjF97F3fjEX/car-racing-game-Xxyc6UZey3YLaJKuuiUTw6.webp",
    url: "https://example.com/game1",
    category: "Racing",
  },
  {
    id: "shooting-game",
    title: "Shooting Game",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663590680077/TpvmP9NbeF3CjF97F3fjEX/shooting-game-TQqH66uhtczk86eMF7ubcq.webp",
    url: "https://example.com/game2",
    category: "Action",
  },
  {
    id: "puzzle-master",
    title: "Puzzle Master",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663590680077/TpvmP9NbeF3CjF97F3fjEX/puzzle-game-PKeQZfHHHfAvLPAZSxvuFK.webp",
    url: "https://example.com/game3",
    category: "Puzzle",
  },
  {
    id: "space-adventure",
    title: "Space Adventure",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663590680077/TpvmP9NbeF3CjF97F3fjEX/space-game-o2RZ6AVnNDCbFj7ebTyb93.webp",
    url: "https://example.com/game4",
    category: "Adventure",
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [games, setGames] = useState<Game[]>([]);

  // Simulate loading games
  useEffect(() => {
    const timer = setTimeout(() => {
      setGames(GAMES);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
    // Open game in new tab
    window.open(game.url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center">
              <span className="text-accent font-bold text-sm">🎮</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Game Portal</h1>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
              Home
            </a>
            <a href="#games" className="text-foreground/70 hover:text-accent transition-colors">
              Games
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Game Portal
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Discover and play amazing games instantly. Click on any game to start playing right now.
            </p>
            <div className="flex gap-4">
              <a
                href="#games"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
              >
                Explore Games
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid Section */}
      <section id="games" className="py-20 md:py-32">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Available Games
            </h3>
            <p className="text-foreground/60">
              {games.length} games ready to play
            </p>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-accent animate-spin mb-4" />
              <p className="text-foreground/70 text-lg">Loading games...</p>
            </div>
          ) : (
            <>
              {/* Games Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {games.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => handleGameClick(game)}
                    className="group glow-card cursor-pointer overflow-hidden h-full flex flex-col"
                  >
                    {/* Game Image */}
                    <div className="relative overflow-hidden h-48 md:h-56 bg-secondary/50">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center backdrop-blur-sm border border-accent/50">
                          <Play className="w-8 h-8 text-accent-foreground fill-accent-foreground" />
                        </div>
                      </div>

                      {/* Category Badge */}
                      {game.category && (
                        <div className="absolute top-3 right-3 px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-xs font-semibold text-accent">
                          {game.category}
                        </div>
                      )}
                    </div>

                    {/* Game Info */}
                    <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                      <h4 className="text-lg md:text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                        {game.title}
                      </h4>
                      <button
                        onClick={() => handleGameClick(game)}
                        className="w-full py-2 px-4 bg-accent/10 border border-accent/30 text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/30"
                      >
                        Play Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {games.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-foreground/60 text-lg">No games available yet.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8 md:py-12 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Game Portal</h4>
              <p className="text-foreground/60 text-sm">
                Your ultimate destination for instant gaming entertainment.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#games" className="hover:text-accent transition-colors">
                    Games
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 text-center text-sm text-foreground/50">
            <p>&copy; 2026 Game Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
