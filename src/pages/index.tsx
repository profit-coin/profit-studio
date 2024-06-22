import { useEffect } from 'react';
import { useRouter } from 'next/router'
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout'
import MyChannelsList from '@/components/channels/MyChannelsList/MyChannelsList'
import WrapperWithButton from '@/components/wrappers/WrapperWithButton/WrapperWithButton'
import { useAuth } from '@/auth/authContext';

export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.BackButton.hide();
    }
  }, []);

  const handleAddChannel = () => {
    router.push('/add-channel')
  }

  return (
    <AuthLayout>
      {!isLoading && user ? (
        <WrapperWithButton
          user={user}
          buttonLabel={'Add channel'}
          onButtonClick={handleAddChannel}
        >
          <MyChannelsList />
        </WrapperWithButton>
      ) : null}
    </AuthLayout>
  )
}
