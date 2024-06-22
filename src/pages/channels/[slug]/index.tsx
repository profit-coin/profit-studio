import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import DefaultWrapper from '@/components/wrappers/DefaultWrapper/DefaultWrapper'
import {useChannelBySlug} from '@/data/channels'
import ChannelHeader from '@/components/channel/ChannelHeader/ChannelHeader'
import {useAuth} from '@/auth/authContext'

const ChannelChart = dynamic(
  () => import('@/components/channel/ChannelChart/ChannelChart'),
  { ssr: false },
);

function ChannelPage() {
  const { user } = useAuth();

  const { push, query } = useRouter();
  const slug = query.slug as string;
  const { data: channel } = useChannelBySlug(slug);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.BackButton.onClick(() => {
        push('/');
      });
      window.Telegram.WebApp.BackButton.show();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {user ? (
          <DefaultWrapper>
            {channel ? (
              <>
                <ChannelHeader channel={channel} />
                <ChannelChart channel={channel} />
              </>
            ) : null}
          </DefaultWrapper>
        ) : null}
      </main>
    </>
  )
}

export default ChannelPage;
