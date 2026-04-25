import { Link, NavLink } from "react-router";
import { Container } from "./Container";
import { headerNav } from "@/content/nav";
import { cn } from "@/lib/cn";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" aria-label="BLAH 홈" className="block">
          <img
            src="/brand/logos/logo-horizontal.svg"
            alt="BLAH"
            className="h-7 w-auto md:h-8"
          />
        </Link>
        <nav className="flex items-center gap-1">
          {headerNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-brand-deep"
                    : "text-slate-600 hover:bg-brand-mist hover:text-brand-deep",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}
