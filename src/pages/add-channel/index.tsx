import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { TelegramUser } from '@/data/telegram'
import Heading from '@/components/common/Heading/Heading'
import AddChannelForm from '@/components/channels/AddChannelForm/AddChannelForm'
import Box from '@/components/common/Box/Box'
import Text from '@/components/common/Text/Text'
import WrapperWithButton from '@/components/wrappers/WrapperWithButton/WrapperWithButton'
import {useVerifyChannelOwnershipMutation} from '@/data/channels'

function AddChannelPage() {
  const { push } = useRouter();
  const [ slug, setSlug ] = useState<string>('');
  const [ user, setUser ] = useState<TelegramUser | null>(null)

  const verifyChannelOwnershipMutation = useVerifyChannelOwnershipMutation();

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.headerColor = 'rgba(47,44,170,1)';
      window.Telegram.WebApp.BackButton.onClick(() => {
        push('/');
      });
      window.Telegram.WebApp.BackButton.show();

      const query = new URLSearchParams(window.Telegram.WebApp.initData);
      const user = query.get('user');

      if (user) {
        setUser(JSON.parse(user))
      }
    }
  }, []);

  const handleAddChannel = () => {
    console.log('handleAddChannel', user);
    if (!user) {
      return;
    }
    verifyChannelOwnershipMutation.mutate({
      slug,
      userId: user.id
    });
  };

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {user ? (
          <WrapperWithButton buttonLabel="Add" onButtonClick={handleAddChannel}>
            <Box mb="4">
              <Heading size="h1" align="left">
                Add new channel
              </Heading>
            </Box>
            <Box mb="6">
              <Text color="primary" size="medium" align="left">
                ⚠️ Before adding a channel, make sure that our bot is already an admin in your channel. Otherwise, we won't be able to fetch your channel's data and verify it.
              </Text>
            </Box>
            <AddChannelForm onSlugChange={(slug) => { setSlug(slug); }} />
          </WrapperWithButton>
        ) : null}
      </main>
    </>
  )
}

export default AddChannelPage;
