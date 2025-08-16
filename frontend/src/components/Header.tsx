import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="text-lg font-semibold">Mystic Portal</div>
        <ul className="flex items-center gap-2 sm:gap-4 text-sm">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-2 py-1 rounded-md transition-colors ${isActive ? "bg-muted text-primary" : "hover:bg-muted/60"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/daily-horoscope"
              className={({ isActive }) =>
                `px-2 py-1 rounded-md transition-colors ${isActive ? "bg-muted text-primary" : "hover:bg-muted/60"}`
              }
            >
              Daily Horoscope
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kundali-report"
              className={({ isActive }) =>
                `px-2 py-1 rounded-md transition-colors ${isActive ? "bg-muted text-primary" : "hover:bg-muted/60"}`
              }
            >
              Kundali Report
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-2 py-1 rounded-md transition-colors ${isActive ? "bg-muted text-primary" : "hover:bg-muted/60"}`
              }
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
