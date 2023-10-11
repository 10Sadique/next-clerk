import Navbar from '@/components/Navbar';
import { SideNav } from '@/components/SideNav';
import { ScrollArea } from '@/components/ui/scroll-area';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="shrink-0 overflow-y-auto w-full border-r h-[calc(100vh-57px)] hidden md:block md:sticky top-[57px] z-30 -ml-2">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <SideNav />
          </ScrollArea>
        </aside>
        <main className="flex flex-col w-full overflow-hidden">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
