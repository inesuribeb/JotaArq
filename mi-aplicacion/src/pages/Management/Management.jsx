import { useLanguage } from '../../contexts/LanguageContext';
import './Management.css'

function Management() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="management-content">
            <h1>{t('management')}</h1>
        </div>
    )
}

export default Management; 