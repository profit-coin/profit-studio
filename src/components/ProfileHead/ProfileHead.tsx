import styles from './ProfileHead.module.scss'
import Balance from '../Balance/Balance'
import { useUserBalance } from '@/data/user';
import { useAuth } from '@/auth/authContext';
import Loader from '../common/Loader/Loader';

function ProfileHead() {
  const { user } = useAuth();
  const { data: balance, isLoading } = useUserBalance(user?.telegramId);

  if (!user || isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.name}>
        {user.firstName} {user.lastName}
      </h1>
      <span className={styles.username}>@{user.username}</span>
      <Balance balance={balance} size="large" />
    </div>
  )
}

export default ProfileHead
