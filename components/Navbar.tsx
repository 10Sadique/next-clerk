import { ToggleTheme } from '@/components/ToggleTheme';

export default function Navbar() {
  return (
    <nav className="sticky top-0 py-2 border-b">
      <div className="container flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Brand</h1>
        </div>
        <ToggleTheme />
      </div>
    </nav>
  );
}
