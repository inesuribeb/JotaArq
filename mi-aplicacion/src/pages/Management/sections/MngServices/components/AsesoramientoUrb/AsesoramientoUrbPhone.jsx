import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './AsesoramientoUrbPhone.css';

function AsesoramientoUrbPhone({ t }) {
    return (
        <ServicesLayoutPhone
            bgImage="/Images/Management/services/masgestion1.webp"
            image="/Images/Management/services/masgestion2.webp"
            title={t('asesoramientoUrbanistico')}
            subtitle={t('sostenibilitySubtitle')}
            text={t('sostenibilityText')}
            t={t}
        />
    )
}

export default AsesoramientoUrbPhone;