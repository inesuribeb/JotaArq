import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './TramLicencias.css';

function TramLicencias({ t }) {
    return (
        <ServicesLayout
            // bgImage="/Images/Architecture/services/ejemplo1.jpg"
            // image="/Images/Architecture/services/ejemplo1.1.jpg"
            bgImage="/Images/Management/services/masgestion4.webp"
            image="/Images/Management/services/masgestion3.webp"
            title={t('tramitacionLicencias')}
            subtitle={t('tramitacionLicencias')}
            text={t('sostenibilityText')}
            t={t}
            reverse={true} 
        />
    )
}

export default TramLicencias;