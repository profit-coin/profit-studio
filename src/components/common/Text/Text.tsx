import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Text.module.scss'

interface TextProps {
  color?: 'primary' | 'secondary' | 'red'
  size?: 'large' | 'medium' | 'small' | 'tiny'
  align?: 'left' | 'center' | 'right'
  className?: string
}

function Text({ children, size = 'medium', align = 'center', color = 'primary', className }: PropsWithChildren<TextProps>) {
  return (
    <div className={classNames(styles.text, styles[size], styles[align], styles[color], className)}>
      {children}
    </div>
  )
}

export default Text
