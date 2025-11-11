import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './TramLicencias.css';

function TramLicencias({ t }) {
    return (
        <ServicesLayout
            bgImage="/Images/Management/services/propertyManagement/OPISA.jpg"
            image="/Images/Management/services/masgestion3.webp"
            title={t('propertyManagement')}
            subtitle={t('propertyManagementSb')}
            text={t('propertyManagementText')}
            t={t}
            // reverse={true} 
        />
    )
}

export default TramLicencias;