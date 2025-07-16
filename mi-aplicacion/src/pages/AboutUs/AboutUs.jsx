import { useLanguage } from '../../contexts/LanguageContext';
import './AboutUs.css'

function AboutUs () {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="aboutus-content">
            <h1>{t('aboutUs')}</h1>
        </div>
    )
}

export default AboutUs; 