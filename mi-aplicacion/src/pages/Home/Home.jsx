import { useLanguage } from '../../contexts/LanguageContext';
import Portada from './sections/Portada/Portada';
import Intro from './sections/Intro/Intro';
import ServicesIntro from './sections/Services/ServicesIntro';
import './Home.css'

function Home() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="home-content">
            <Portada
                t={t}
            />
            <Intro
                t={t}
            />
            <ServicesIntro
                t={t}
            />
        </div>
    )
}

export default Home; 