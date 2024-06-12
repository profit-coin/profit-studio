import type { AppProps } from 'next/app'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import '@/styles/globals.scss'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../../next-i18next.config.js';
import {useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App({ Component, pageProps }: AppProps) {
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

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </QueryClientProvider>
  )
}

export default appWithTranslation(App, nextI18NextConfig);
