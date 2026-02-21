import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackButton from './components/BackButton';

export default function App() {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <Welcome />
                <About />
                <Projects />
                <BackButton />
            </main>
            <Footer />
        </div>
    );
}
