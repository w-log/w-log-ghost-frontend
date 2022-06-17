import React from 'react';
import { Sun, Moon } from '@components/icons';
type Theme = 'dark' | 'light';

const isDarkTheme =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

export const ToggleTheme = () => {
    const [theme, setTheme] = React.useState<Theme>(
        isDarkTheme ? 'dark' : 'light'
    );

    const onToggleTheme = React.useCallback(() => {
        const doc = document.documentElement;
        const _theme = theme === 'dark' ? 'light' : 'dark';

        if (_theme === 'dark') {
            !doc.classList.contains('dark') && doc.classList.add('dark');
        } else {
            doc.classList.contains('dark') && doc.classList.remove('dark');
        }

        setTheme(_theme);
        localStorage.setItem('theme', _theme === 'dark' ? _theme : '');
    }, [theme]);

    return (
        <button
            className="inline-flex w-6 h-6 text-primary-2 dark:text-sencondary"
            aria-label="change theme"
            onClick={onToggleTheme}
        >
            {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
    );
};
