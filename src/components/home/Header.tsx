import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { HeaderTilt } from './HeaderTilt';

export const Header = () => {
  return (
    <div className="relative z-20 flex justify-between items-center container min-h-[calc(100vh-4rem)]">
      <div>
        <p className="inline-block px-5 py-1 text-xs transition-colors rounded-full bg-foreground/70 hover:bg-foreground/80 text-muted w-max">
          LET&apos;S BUILD SOMTHING AMAZING TOGETHER
        </p>

        <h1 className="mt-6 text-6xl font-bold w-max">
          Hello, I&apos;m{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
            Jafar
          </span>
        </h1>

        <h2 className="mt-4 text-3xl font-bold w-max">
          A Full-Stack Developer
        </h2>

        <p className="w-4/5 lg:mt-5">
          I am Md Jafar Sadique. I am a full-stack developer who specializes in
          crafting high-quality and precise web apps. I am currently
          concentrating on developing optimized and scalable full-stack apps
          that turn ideas into seamless, user-centric solutions.
        </p>

        <div className="flex items-center space-x-10">
          <Button className="mt-6">
            <Download className="w-4 h-4 mr-2" /> Resume
          </Button>

          <div className="flex items-center mt-5 space-x-4">
            <Button size={'icon'}>
              <Linkedin className="w-4 h-4 text-black " />
            </Button>
            <Button size={'icon'}>
              <Github className="w-4 h-4 text-black " />
            </Button>
            <Button size={'icon'}>
              <Mail className="w-4 h-4 text-black " />
            </Button>
          </div>
        </div>
      </div>

      <HeaderTilt />
    </div>
  );
};
