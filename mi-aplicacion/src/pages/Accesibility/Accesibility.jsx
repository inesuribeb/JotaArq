import { useLanguage } from '../../contexts/LanguageContext';
import './Accesibility.css';

function Accesibility() {
    const { t } = useLanguage();

    return (
        <div className="accesibility-container">
            <div 
                className="accesibility-content"
                dangerouslySetInnerHTML={{ __html: t('accesibilityText') }}
            />
        </div>
    )
}

export default Accesibility;