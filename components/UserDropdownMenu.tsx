'use client';

import { useUser, SignOutButton } from '@clerk/nextjs';
import { useTransition } from 'react';
import { User, FileCode, Settings, LogOut } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const UserDropdownMenu = () => {
  const user = useUser();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  if (!user.isSignedIn) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative w-8 h-8 rounded-full">
          <Avatar className="w-8 h-8">
            <AvatarImage src={user.user?.imageUrl} alt="user" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="flex items-center gap-3 font-semibold">
          <Avatar className="w-8 h-8">
            <AvatarImage src={user.user?.imageUrl} alt="user" />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>
          <div>
            <p>{user.user.fullName}</p>
            <p className="text-xs text-muted-foreground">
              {user.user.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={'/dashboard/account'}>
            <DropdownMenuItem className="cursor-pointer">
              <User className="w-4 h-4 mr-2" />
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <Link href={'/dashboard'}>
            <DropdownMenuItem className="cursor-pointer">
              <FileCode className="w-4 h-4 mr-2" />
              Dashboard
              <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <Link href={'/dashboard/settings'}>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="w-4 h-4 mr-2" />
              Settings
              <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />

          <SignOutButton
            signOutCallback={() => {
              startTransition(() => {
                router.push('/');
              });
            }}
          >
            <DropdownMenuItem className="cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" />
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </SignOutButton>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
