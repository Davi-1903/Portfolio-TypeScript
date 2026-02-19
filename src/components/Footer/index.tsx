export default function Footer() {
    return (
        <footer className='bg-black-100 p-4'>
            <p className='text-center font-primary text-lg text-white-100'>
                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
        </footer>
    );
}
