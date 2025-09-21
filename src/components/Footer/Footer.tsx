import type { JSX } from 'react';
import './Footer.css';

export default function Footer(): JSX.Element {
    return (
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
    );
}
