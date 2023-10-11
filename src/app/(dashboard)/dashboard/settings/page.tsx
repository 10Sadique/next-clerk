import { Heading } from '@/components/ui/header';

const Settings = () => {
  return (
    <div className="py-6 lg:py-8">
      <Heading
        title="Settings"
        description={'Manage your app settings.'}
        size="sm"
      />
    </div>
  );
};

export default Settings;
