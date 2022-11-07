import axiosClient from '@/api/axios-client';
import { EmptyLayout } from '@/components/common';
import { AppPropsWithLayout } from '@/models/common';
import store from '@/redux/store';
import { createEmotionCache } from '@/ultis/create-emotion-caches';
import { theme } from '@/ultis/index';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import '../styles/globals.css';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;
    return (
        <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <SWRConfig
                        value={{
                            fetcher: (url) => axiosClient.get(url),
                            shouldRetryOnError: false,
                        }}
                    >
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </SWRConfig>
                </ThemeProvider>
            </CacheProvider>
        </Provider>
    );
}

export default MyApp;
