import { TelegramUser } from '@/data/telegram'
import styles from './ProfileHead.module.scss'
import Balance from '../Balance/Balance'

interface ProfileHeadProps {
  user: TelegramUser
}

function ProfileHead({ user }: ProfileHeadProps) {
  return (
    <div className={styles.content}>
      <h1 className={styles.name}>
        {user.first_name} {user.last_name}
      </h1>
      <span className={styles.username}>@{user.username}</span>
      <Balance color="primary" balance={40301000} size="large" />
    </div>
  )
}

export default ProfileHead
