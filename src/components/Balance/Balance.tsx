import classNames from 'classnames';
import styles from './Balance.module.scss'
import Coin from '../../../public/coin.svg'

interface BalanceProps {
  balance: number | undefined;
  size: 'small' | 'large';
}

function Balance ({ balance, size }: BalanceProps) {
  return (
    <span className={classNames(styles.ballance, styles[size])}>
      {balance ? balance.toFixed(2) : '0.00'}
      <Coin className={styles.coin} />
    </span>
  );
}

export default Balance;
