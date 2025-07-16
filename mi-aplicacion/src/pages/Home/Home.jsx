import { useLanguage } from '../../contexts/LanguageContext';
import './Home.css'

function Home() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="home-content">
            <h1 dangerouslySetInnerHTML={{ __html: t('homeIntro') }}></h1>
        </div>
    )
}

export default Home; 