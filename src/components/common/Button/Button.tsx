import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  isFullWidth?: boolean;
}

function Button({ children, onClick, size = 'medium', isFullWidth }: PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={onClick} className={classNames(styles.button, styles[size], { [styles.fullWidth]: isFullWidth})}>
      {children}
    </button>
  )
}

export default Button
