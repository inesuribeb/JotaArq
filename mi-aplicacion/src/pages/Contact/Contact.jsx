import { useLanguage } from '../../contexts/LanguageContext';
import MainTitle from '../../components/Titles/MainTitle';
import './Contact.css'

function Contact() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="contact-content">
            {/* <h1>{t('contact')}</h1> */}
            <MainTitle
                title="jota"
                subtitle={t('creemosJuntos')}
                className="custom-class"
            />
        </div>
    )
}

export default Contact; 