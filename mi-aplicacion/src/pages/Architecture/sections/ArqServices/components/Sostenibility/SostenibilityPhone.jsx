import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './SostenibilityPhone.css';

function SostenibilityPhone({ t }) {
    return (
        <ServicesLayoutPhone
            // bgImage="/Images/Architecture/services/plantaSolar.jpg"
            bgImage={[
                "/Images/Architecture/services/sostenibility/01.png",
                "/Images/Architecture/services/sostenibility/02.jpeg",
                "/Images/Architecture/services/sostenibility/03.jpg",
            ]}
            image="/Images/Architecture/services/solar2.jpg"
            title={t('sostenibilidad')}
            // subtitle={t('sostenibilitySubtitle')}
            // text={t('sostenibilityText')}
            subtitle={t('sostenibilitySubtitle', 'architecture')} // ← CAMBIO
            text={t('sostenibilityText', 'architecture')}
            t={t}
            reverse={true} 
        />
    )
}

export default SostenibilityPhone;