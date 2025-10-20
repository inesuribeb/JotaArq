import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './SostenibilityPhone.css';

function SostenibilityPhone({ t }) {
    return (
        <ServicesLayoutPhone
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

export default SostenibilityPhone;