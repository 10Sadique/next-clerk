import { AboutMe } from '@/components/about-me/about-me';
import { BgGradiant } from '@/components/home/BgGradiant';
import { Header } from '@/components/home/Header';

export default function Home() {
  return (
    <div className="antialiased transition-all">
      <BgGradiant />
      <Header />
      <AboutMe />
    </div>
  );
}
