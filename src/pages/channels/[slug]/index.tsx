import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { TelegramUser } from '@/data/telegram'
import DefaultWrapper from '@/components/wrappers/DefaultWrapper/DefaultWrapper'
import {useChannelBySlug} from '@/data/channels'
import ChannelHeader from '@/components/channel/ChannelHeader/ChannelHeader'

const ChannelChart = dynamic(
  () => import('@/components/channel/ChannelChart/ChannelChart'),
  { ssr: false },
);

function ChannelPage() {
  const { push, query } = useRouter();
  const [ user, setUser ] = useState<TelegramUser | null>(null)
  const slug = query.slug as string;
  const { data: channel } = useChannelBySlug(slug);

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
