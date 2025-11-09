import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './Certificados.css';

function Certificados({ t }) {
    return (
        <ServicesLayout
            bgImage="/Images/Management/services/projectManagement/01S.JPG"
            image="/Images/Management/services/gestion1.webp"
            title={t('projectManagement')}
            subtitle={t('projectManagementSb')}
            text={t('projectManagementText')}
            t={t}
            reverse={true} 
        />
    )
}

export default Certificados;