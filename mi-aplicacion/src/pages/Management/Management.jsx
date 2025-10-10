import { useLanguage } from '../../contexts/LanguageContext';
import MainTitle from '../../components/Titles/MainTitle';
import './Management.css'

function Management() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="management-content">
            {/* <h1>{t('management')}</h1> */}
            <MainTitle
                title={t('serviciosDe')}
                subtitle={t('deGestion')}
                className="custom-class"
            />
        </div>
    )
}

export default Management; 