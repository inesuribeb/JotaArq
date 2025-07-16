import { useLanguage } from '../../contexts/LanguageContext';
import Portada from './components/Portada';
import './Home.css'

function Home() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="home-content">
            <Portada
                t={t}
            />
        </div>
    )
}

export default Home; 