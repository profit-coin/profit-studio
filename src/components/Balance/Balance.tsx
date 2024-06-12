import classNames from 'classnames';
import styles from './Balance.module.scss'
import Coin from '../../../public/coin.svg'

interface BalanceProps {
  balance: number;
  size: 'small' | 'large';
  color: 'primary' | 'primaryInverse';
}

function Balance ({ balance, size, color }: BalanceProps) {
  return (
    <span className={classNames(styles.ballance, styles[size], styles[color])}>
      {balance}
      <Coin className={styles.coin} />
    </span>
  );
}

export default Balance;
