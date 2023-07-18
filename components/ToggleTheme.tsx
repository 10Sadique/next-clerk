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
        <Sun className="w-[18px] h-[18px] transition-all duration-200 scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />

        <MoonStar className="absolute w-[18px] h-[18px] transition-all duration-200 scale-0 rotate-90 dark:scale-100 dark:-rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};
