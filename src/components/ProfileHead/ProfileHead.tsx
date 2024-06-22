import { InternalUser } from '@/data/auth'
import styles from './ProfileHead.module.scss'
import Balance from '../Balance/Balance'

interface ProfileHeadProps {
  user: InternalUser;
}

function ProfileHead({ user }: ProfileHeadProps) {
  return (
    <div className={styles.content}>
      <h1 className={styles.name}>
        {user.firstName} {user.lastName}
      </h1>
      <span className={styles.username}>@{user.username}</span>
      <Balance balance={user.balance} size="large" />
    </div>
  )
}

export default ProfileHead
