import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="bg-white dark:bg-primary-1">
                <Main />
                <NextScript />
                <script
                    id="check-dark-mode"
                    dangerouslySetInnerHTML={{
                        __html: `
                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                      document.documentElement.classList.add('dark')
                    } else {
                      document.documentElement.classList.remove('dark')
                    }`,
                    }}
                />
            </body>
        </Html>
    );
}
