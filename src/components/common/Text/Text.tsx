import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Text.module.scss'

interface TextProps {
  size?: 'large' | 'medium' | 'small' | 'tiny'
  align?: 'left' | 'center' | 'right'
  color: 'primary' | 'primaryInverse' | 'secondary' | 'tertiary' | 'error'
  className?: string
}

function Text({ children, color, size = 'medium', align = 'center', className }: PropsWithChildren<TextProps>) {
  return (
    <div className={classNames(styles.text, styles[size], styles[color], styles[align], className)}>
      {children}
    </div>
  )
}

export default Text
