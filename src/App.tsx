import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
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
