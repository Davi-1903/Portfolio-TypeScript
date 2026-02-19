export default function Footer() {
    return (
        <footer className='bg-black-100 p-4 dark:bg-white-50'>
            <p className='text-center font-primary text-lg text-white-100 dark:text-black-100'>
                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
        </footer>
    );
}
