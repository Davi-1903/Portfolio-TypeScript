import type { JSX } from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

export default function App(): JSX.Element {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <Welcome />
                <About />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}
