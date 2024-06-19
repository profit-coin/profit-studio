import { PropsWithChildren, useEffect } from 'react'
import styles from './DefaultLayout.module.scss'
import { ColorScheme } from '@/pages/_app'
import classNames from 'classnames';

interface DefaultLayoutProps {
  colorScheme: ColorScheme;
}

function DefaultLayout({ children, colorScheme }: PropsWithChildren<DefaultLayoutProps>) {
  useEffect(() => {
    if (window.Telegram?.WebApp && !window.Telegram?.WebApp?.isExpanded) {
      window.Telegram.WebApp.expand()
    }
  }, []);

  return (
    <div className={classNames(colorScheme, styles.layout)}>
      {children}
    </div>
  )
}

export default DefaultLayout
