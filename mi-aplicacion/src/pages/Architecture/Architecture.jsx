import { useLanguage } from '../../contexts/LanguageContext';
import './Architecture.css'

function Architecture() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="architecture-content">
            <h1>{t('architecture')}</h1>
        </div>
    )
}

export default Architecture; 