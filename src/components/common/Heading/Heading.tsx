import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Heading.module.scss'

interface HeadingProps {
  align?: 'left' | 'center' | 'right'
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  className?: string
}

function Heading({
  size = 'h1',
  align = 'center',
  className,
  children,
}: PropsWithChildren<HeadingProps>) {
  const Tag = size

  return (
    <Tag
      className={classNames(styles.heading, styles[size], styles[align], className)}
    >
      {children}
    </Tag>
  )
}

export default Heading
