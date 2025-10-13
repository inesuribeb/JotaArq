import { useLanguage } from '../../contexts/LanguageContext';
import MainTitle from '../../components/Titles/MainTitle';
import Pictures from './sections/Pictures/Pictures';
import './Architecture.css'
import Statement from './sections/Statement/Statement';
import ArqServices from './sections/ArqServices/ArqServices';

function Architecture() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="architecture-content">
            {/* <h1>{t('architecture')}</h1> */}
            <MainTitle
                title={t('serviciosDe')}
                subtitle={t('deArquitectura')}
                className="custom-class"
            />

            <Pictures />

            <Statement
                t={t}
            />

            <ArqServices
                t={t}
            />
        </div>
    )
}

export default Architecture; 