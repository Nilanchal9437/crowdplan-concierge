import { Link } from "@remix-run/react";
import { MapPin, Sun, Moon } from "lucide-react";
import Container from "~/components/Container";
import { useTheme } from "~/context/ThemeContext"; // ✅ Use global theme context

function NavBar() {
  const { theme, toggleTheme } = useTheme(); // ✅ Use theme from context

  return (
    <header className="bg-white dark:bg-gray-800 sticky top-0 z-50 shadow-sm">
      <Container>
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <MapPin className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Crowdplan
              </span>
            </Link>
            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={24} className="text-white" /> : <Moon size={24}  />}
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;
