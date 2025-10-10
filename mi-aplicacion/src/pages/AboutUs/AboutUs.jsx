import { useLanguage } from '../../contexts/LanguageContext';
import MainTitle from '../../components/Titles/MainTitle';
import './AboutUs.css'

function AboutUs () {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="aboutus-content">
            {/* <h1>{t('aboutUs')}</h1> */}
            <MainTitle
                title="jota"
                subtitle={t('historiaVision')}
                className="custom-class"
            />
        </div>
    )
}

export default AboutUs; 