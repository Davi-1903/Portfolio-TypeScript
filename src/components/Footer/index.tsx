export default function Footer() {
    return (
        <footer className='bg-black p-4'>
            <p className='text-center font-primary text-lg text-white'>
                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
        </footer>
    );
}
