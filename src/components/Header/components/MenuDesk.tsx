import { IconBrandGithub, IconBrandInstagram, IconMail, IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from '../../../context/themeContext';

const linksList = [
    {
        id: 1,
        icon: <IconBrandGithub className='icon' />,
        url: 'https://github.com/Davi-1903',
        target: '_blank',
    },
    {
        id: 2,
        icon: <IconBrandInstagram className='icon' />,
        url: 'https://instagram.com/davifran11',
        target: '_blank',
    },
    {
        id: 3,
        icon: <IconMail className='icon' />,
        url: 'mailto:franciscodavi327@gmail.com',
        target: '_self',
    },
];

const MenuDask = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    };

    return (
        <nav className='hidden sm:block'>
            <ul className='flex gap-8'>
                {linksList.map(link => (
                    <li key={link.id}>
                        <a href={link.url} target={link.target} className='cursor-pointer'>
                            {link.icon}
                        </a>
                    </li>
                ))}
                <li key='toggle-theme'>
                    <button className='cursor-pointer' onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <IconMoon className='icon hover:translate-none' />
                        ) : (
                            <IconSun className='icon hover:translate-none' />
                        )}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default MenuDask;
