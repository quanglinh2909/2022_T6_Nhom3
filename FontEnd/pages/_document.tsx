import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { createEmotionCache, theme } from '@/ultis/index';
import PageIcon from '@/images/profile-icon/new-world.png';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    <meta name="theme-color" content={theme.palette.primary.main} />

                    <link rel="stylesheet" type="text/css" href="css/bootstrap.css"></link>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="css/bootstrap-responsive.css"
                    ></link>
                    <link rel="stylesheet" type="text/css" href="css/style.css"></link>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="css/bootstrap-theme.min.css"
                    ></link>
                    <link rel="stylesheet" type="text/css" href="js/jquery-ui.css"></link>
                    <link rel="icon" href="/logo.png"></link>
                    <script type="text/javascript" src="js/modernizr.min.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
                <script type="text/javascript" src="js/jquery-ui.min.js"></script>
                <script type="text/javascript" src="js/jquery-migrate-1.2.1.js"></script>
                <script type="text/javascript" src="js/bootstrap.min.js"></script>
                <script type="text/javascript" src="js/jquery.touchSwipe.min.js"></script>
                <script type="text/javascript" src="js/jquery.ui.datepicker.js"></script>
                <script type="text/javascript" src="js/custom.js"></script>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
    };
};
