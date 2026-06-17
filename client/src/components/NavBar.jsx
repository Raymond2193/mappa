import { NavLink } from "react-router-dom";

const links = [
  { to: "/search", label: "Search" },
  { to: "/calendar", label: "Calendar" },
  { to: "/availability", label: "Availability" },
];

export default function NavBar() {
  return (
    <nav className="bg-surface border-b border-border-subtle shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-8">
        <span className="text-brand font-semibold text-lg tracking-tight">Mappa</span>
        <div className="flex gap-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-brand font-medium text-sm border-b-2 border-brand pb-0.5"
                  : "text-slate-500 hover:text-slate-800 text-sm font-medium"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
