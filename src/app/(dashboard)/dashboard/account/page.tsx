import { UserProfile } from '@/components/dashboard/account/UserProfile';
import { Heading } from '@/components/ui/header';

const Profile = () => {
  return (
    <div className="py-6 lg:py-8">
      <Heading
        title="Account"
        description={'Manage your account settings.'}
        size="sm"
      />
      <div className="w-full pt-6 overflow-hidden lg:pt-8">
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
