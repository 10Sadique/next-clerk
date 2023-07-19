import { Heading } from '@/components/ui/header';

function Dashboard() {
  return (
    <div className="py-6 lg:py-8">
      <Heading
        title="Dashboard"
        description={'Manage your dashboard.'}
        size="sm"
      />
    </div>
  );
}

export default Dashboard;
