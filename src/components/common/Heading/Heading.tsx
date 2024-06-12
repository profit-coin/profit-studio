import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Heading.module.scss'

interface HeadingProps {
  theme?: 'light' | 'dark'
  color?: 'primary' | 'inverse'
  align?: 'left' | 'center' | 'right'
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
}

function Heading({
  theme = 'light',
  size = 'h1',
  align = 'center',
  color = 'primary',
  className,
  children,
}: PropsWithChildren<HeadingProps>) {
  const Tag = size

  return (
    <Tag
      className={classNames(styles.heading, styles[theme], styles[size], styles[align], styles[color], className)}
    >
      {children}
    </Tag>
  )
}

export default Heading
