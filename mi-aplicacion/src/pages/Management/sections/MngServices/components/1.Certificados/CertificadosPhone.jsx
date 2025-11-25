import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './CertificadosPhone.css';

function CertificadosPhone({ t }) {
    return (
        <ServicesLayoutPhone
            // bgImage="/Images/Management/services/projectManagement/01S.JPG"
            bgImage="/Images/Management/services/propertyManagement/03.JPG"
            image="/Images/Management/services/gestion1.webp"
            title={t('projectManagement')}
            // subtitle={t('projectManagementSb')}
            // text={t('projectManagementText')}
            subtitle={t('projectManagementSb', 'management')} // ← CAMBIO
            text={t('projectManagementText', 'management')} 
            t={t}
            reverse={true}
            dark={true}
        />
    )
}

export default CertificadosPhone;