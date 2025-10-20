import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './CertificadosPhone.css';

function CertificadosPhone({ t }) {
    return (
        <ServicesLayoutPhone
            bgImage="/Images/Management/services/gestion4.webp"
            image="/Images/Management/services/gestion1.webp"
            title={t('certificados')}
            subtitle={t('sostenibilitySubtitle')}
            text={t('sostenibilityText')}
            t={t}
            reverse={true} 
        />
    )
}

export default CertificadosPhone;