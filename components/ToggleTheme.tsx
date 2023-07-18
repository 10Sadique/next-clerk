'use client';

import { Sun, MoonStar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export const ToggleTheme = () => {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  const handleThemeChange = () => {
    setIsDark(!isDark);
    if (!isDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={handleThemeChange}
        className="transition-all duration-100"
      >
        <Sun className="w-[1.2rem] rotate-0 h-[1.2rem] transition-all duration-200 scale-100 dark:-rotate-90 dark:scale-0" />

        <MoonStar className="absolute w-[1.2rem] h-[1.2rem] rotate-90 transition-all duration-200 scale-0 dark:scale-100 dark:-rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};
