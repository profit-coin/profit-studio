import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'
import Spinner from '../../../../public/spinner.svg';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  isFullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

function Button({ children, onClick, size = 'medium', isFullWidth, isLoading, isDisabled }: PropsWithChildren<ButtonProps>) {
  const handleClick = () => {
    if (isDisabled || isLoading) {
      return
    }
    onClick();
  }

  return (
    <button
      onClick={handleClick}
      className={classNames(styles.button, styles[size], {
        [styles.fullWidth]: isFullWidth,
        [styles.isLoading]: isLoading,
      })}
    >
      <>
        {children}
        {isLoading ? (
          <div className={styles.loader}>
            <Spinner />
          </div>
        ) : null}
      </>
    </button>
  )
}

export default Button
