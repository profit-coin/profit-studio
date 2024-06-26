import { useRouter } from 'next/router'
import { useAuth } from '@/auth/authContext'
import { useEffect, useState } from 'react'
import Heading from '@/components/common/Heading/Heading'
import AddChannelForm from '@/components/channels/AddChannelForm/AddChannelForm'
import Box from '@/components/common/Box/Box'
import Text from '@/components/common/Text/Text'
import WrapperWithButton from '@/components/wrappers/WrapperWithButton/WrapperWithButton'
import { useAddChannelMutation } from '@/data/channels'

function AddChannelPage() {
  const { user } = useAuth();
  const { push } = useRouter();
  const [ slug, setSlug ] = useState<string>('');
  const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false);

  const addChannelMutation = useAddChannelMutation();

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.BackButton.onClick(() => {
        push('/');
      });
      window.Telegram.WebApp.BackButton.show();
    }
  }, []);

  const handleAddChannel = async () => {
    setIsSubmitting(true);
    try {
      await addChannelMutation.mutateAsync({
        channelSlug: slug,
      });
      window.Telegram.WebApp.HapticFeedback.impactOccurred('medium');
      push('/');
    } catch (error) {
      console.log(error);
    }
    setIsSubmitting(false);
  };

  if (!user) {
    return null;
  }

  return (
    <WrapperWithButton buttonLabel="Add" onButtonClick={handleAddChannel} isButtonLoading={isSubmitting} user={user}>
      <Box mb="6">
        <Heading size="h2" align="left">
          Add new channel
        </Heading>
      </Box>
      <Box mb="6">
        <Text color="primary" size="small" align="left">
          ⚠️ Before adding a channel, make sure that our bot is already an admin in your channel. Otherwise, we won't be able to fetch your channel's data and verify it.
        </Text>
      </Box>
      <AddChannelForm onSlugChange={(slug) => { setSlug(slug); }} />
    </WrapperWithButton>
  )
}

export default AddChannelPage;
