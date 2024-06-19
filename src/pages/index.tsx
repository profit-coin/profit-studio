import { useEffect, useState } from 'react'
import { TelegramUser } from '@/data/telegram'
import MyChannelsList from '@/components/channels/MyChannelsList/MyChannelsList'
import WrapperWithButton from '@/components/wrappers/WrapperWithButton/WrapperWithButton'
import {useRouter} from 'next/router'
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout'

export default function Home() {
  const router = useRouter();

  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    // if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
    //   window.Telegram.WebApp.BackButton.hide();
    //   const query = new URLSearchParams(window.Telegram.WebApp.initData)
    //   const user = query.get('user')

    //   if (user) {
    //     setUser(JSON.parse(user))
    //   }
    // }
  }, [])

  const handleAddChannel = () => {
    router.push('/add-channel')
  }

  return (
    <AuthLayout>
      {user ? (
        <>
          <WrapperWithButton
            user={user}
            isWithAccount
            buttonLabel={'Add channel'}
            onButtonClick={handleAddChannel}
          >
            <MyChannelsList />
          </WrapperWithButton>
        </>
      ) : null}
    </AuthLayout>
  )
}
