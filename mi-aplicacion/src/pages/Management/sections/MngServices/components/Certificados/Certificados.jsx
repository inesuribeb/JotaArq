import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './Certificados.css';

function Certificados({ t }) {
    return (
        <ServicesLayout
            // bgImage="/Images/Architecture/services/ejemplo1.jpg"
            // image="/Images/Architecture/services/ejemplo1.1.jpg"
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

export default Certificados;