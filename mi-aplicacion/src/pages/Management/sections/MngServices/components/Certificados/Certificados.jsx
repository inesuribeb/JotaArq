import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './Certificados.css';

function Certificados({ t }) {
    return (
        <ServicesLayout
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