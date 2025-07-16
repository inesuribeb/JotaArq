import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css'

function Contact() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="contact-content">
            <h1>{t('contact')}</h1>
        </div>
    )
}

export default Contact; 