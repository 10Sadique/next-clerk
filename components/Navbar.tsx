import { ToggleTheme } from '@/components/ToggleTheme';
import { NavLinks } from './NavLinks';

export default function Navbar() {
  return (
    <nav className="sticky top-0 py-2 border-b">
      <div className="container flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Brand</h1>
        </div>
        <div className="flex items-center space-x-6">
          <NavLinks />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}
