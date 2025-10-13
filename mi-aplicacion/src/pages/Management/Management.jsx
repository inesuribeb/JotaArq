import { useLanguage } from '../../contexts/LanguageContext';
import MainTitle from '../../components/Titles/MainTitle';
import PictureS from './sections/Picture/PictureS';
import StatementM from './sections/Statement/StatementM';
import MngServices from './sections/MngServices/MngServices';
import './Management.css'

function Management() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="management-content">
            <MainTitle
                title={t('serviciosDe')}
                subtitle={t('deGestion')}
                className="custom-class"
            />

            <PictureS />

            <StatementM
                t={t}
            />

            <MngServices
                t={t}
            />
        </div>
    )
}

export default Management; 