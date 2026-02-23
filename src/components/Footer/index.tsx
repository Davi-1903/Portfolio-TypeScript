import { useTheme } from '../../context/themeContext';
import Technology from '../Technology';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className='bg-secund p-4 text-center dark:border-t-2 dark:border-secund dark:bg-first'>
            <p className='mb-4 font-primary text-lg text-first dark:text-secund'>
                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className='flex flex-wrap items-center justify-center gap-2 font-primary text-first dark:text-secund'>
                Made with {<Technology technology='React' theme={theme === 'light' ? 'dark' : 'light'} />}
                {<Technology technology='TypeScript' theme={theme === 'light' ? 'dark' : 'light'} />}
                {<Technology technology='Tailwind' theme={theme === 'light' ? 'dark' : 'light'} />}
            </p>
        </footer>
    );
};

export default Footer;
