import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './Sostenibility.css';

function Sostenibility({ t }) {
    return (
        <ServicesLayout
            // bgImage="/Images/Architecture/services/ejemplo1.jpg"
            // image="/Images/Architecture/services/ejemplo1.1.jpg"
            bgImage="/Images/Architecture/services/plantaSolar.jpg"
            image="/Images/Architecture/services/solar2.jpg"
            title={t('sostenibilidad')}
            subtitle={t('sostenibilitySubtitle')}
            text={t('sostenibilityText')}
            t={t}
            reverse={true} 
        />
    )
}

export default Sostenibility;