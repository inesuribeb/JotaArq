import { useLanguage } from '../../contexts/LanguageContext';
import useIsMobile from '../../hooks/useMobile';
import Portada from './sections/Portada/Portada';
import PortadaPhone from './sections/Portada/PortadaPhone';
import Intro from './sections/Intro/Intro';
import ServicesIntro from './sections/Services/ServicesIntro';
import Contact from './sections/Contact/Contact';
import './Home.css'

function Home() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const isMobile = useIsMobile(768); 

    return (
        <div className="home-content">
            {/* <Portada
                t={t}
            /> */}
            {isMobile ? <PortadaPhone t={t} /> : <Portada t={t} />}
            <Intro
                t={t}
            />
            <ServicesIntro
                t={t}
            />
            <Contact
                t={t}
            />
        </div>
    )
}

export default Home; 