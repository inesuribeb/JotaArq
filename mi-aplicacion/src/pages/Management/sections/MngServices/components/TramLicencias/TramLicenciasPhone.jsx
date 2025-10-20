import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './TramLicenciasPhone.css';

function TramLicenciasPhone({ t }) {
    return (
        <ServicesLayoutPhone
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

export default TramLicenciasPhone;