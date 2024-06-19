import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import '@/styles/globals.scss'
import App from 'next/app'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../../next-i18next.config.js';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/auth/authContext'

export type ColorScheme = 'light' | 'dark';

function CustomApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 1, // 1 minute
          },
        },
      }),
  );

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      setColorScheme(window.Telegram.WebApp.colorScheme);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DefaultLayout colorScheme={colorScheme}>
          <Component {...pageProps} />
        </DefaultLayout>
      </AuthProvider>
    </QueryClientProvider>
  )
}

CustomApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps> => {
  return await App.getInitialProps(context);
};

export default appWithTranslation(CustomApp, nextI18NextConfig);
