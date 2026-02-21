import { useTheme } from '../../context/themeContext';
import Technology from '../Technology';

export default function Footer() {
    const { theme } = useTheme();

    return (
        <footer className='bg-black p-4 text-center dark:border-t-2 dark:border-black dark:bg-white'>
            <p className='mb-4 font-primary text-lg text-white dark:text-black'>
                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className='flex flex-wrap items-center justify-center gap-2 font-primary text-white dark:text-black'>
                Made with {<Technology technology='React' theme={theme === 'light' ? 'dark' : 'light'} />}
                {<Technology technology='TypeScript' theme={theme === 'light' ? 'dark' : 'light'} />}
                {<Technology technology='Tailwind' theme={theme === 'light' ? 'dark' : 'light'} />}
            </p>
        </footer>
    );
}
