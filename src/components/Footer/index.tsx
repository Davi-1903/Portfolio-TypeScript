import { useTheme } from '../../context/themeContext';
import Technology from '../Technology';

export default function Footer() {
    const { theme } = useTheme();

    return (
        <footer className='bg-black-100 p-4 text-center dark:border-t-2 dark:border-black-100 dark:bg-white-100'>
            <p className='mb-4 font-primary text-lg text-white-100 dark:text-black-100'>
                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className='flex flex-wrap items-center justify-center gap-2 font-primary text-white-100 dark:text-black-100'>
                Made with {<Technology technology='React' theme={theme === 'light' ? 'dark' : 'light'} />}
                {<Technology technology='TypeScript' theme={theme === 'light' ? 'dark' : 'light'} />}
                {<Technology technology='Tailwind' theme={theme === 'light' ? 'dark' : 'light'} />}
            </p>
        </footer>
    );
}
