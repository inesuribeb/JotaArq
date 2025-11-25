import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './Certificados.css';

function Certificados({ t }) {
    return (
        <ServicesLayout
            // bgImage="/Images/Management/services/projectManagement/01S.JPG"
            bgImage="/Images/Management/services/propertyManagement/03.JPG"
            image="/Images/Management/services/gestion1.webp"
            title={t('projectManagement')}
            // subtitle={t('projectManagementSb')}
            // text={t('projectManagementText')}
            subtitle={t('projectManagementSb', 'management')} // ← CAMBIO
            text={t('projectManagementText', 'management')} 
            t={t}
            // reverse={true}
        />
    )
}

export default Certificados;