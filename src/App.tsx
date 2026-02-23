import type { AppProps } from './interfaces/Props';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackButton from './components/BackButton';

const App = ({ loadingEnd }: AppProps) => {
    return (
        <div className='wrapper'>
            <Header loadingEnd={loadingEnd} />
            <main>
                <Welcome loadingEnd={loadingEnd} />
                <About />
                <Projects />
                <BackButton />
            </main>
            <Footer />
        </div>
    );
};

export default App;
