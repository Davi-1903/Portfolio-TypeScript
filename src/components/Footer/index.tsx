import Technology from '../Technology';

export default function Footer() {
    return (
        <footer className='bg-black-100 p-4 text-center'>
            <p className='mb-4 font-primary text-lg text-white-100'>
                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className='flex items-center justify-center gap-2 font-primary text-white-100'>
                Made with {<Technology technology='React' theme='dark' />} +{' '}
                {<Technology technology='TypeScript' theme='dark' />} +{' '}
                {<Technology technology='Tailwind' theme='dark' />}
            </p>
        </footer>
    );
}
