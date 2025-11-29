export default function Footer() {
    return (
        <footer className='bg-black p-4'>
            <p className='font-primary text-lg text-center text-white'>
                Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
        </footer>
    );
}
