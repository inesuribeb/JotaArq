import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './TramLicenciasPhone.css';

function TramLicenciasPhone({ t }) {
    return (
        <ServicesLayoutPhone
            // bgImage="/Images/Management/services/propertyManagement/03.JPG"
            bgImage="/Images/Management/services/propertyManagement/OPISA.jpg"
            image="/Images/Management/services/masgestion3.webp"
            title={t('propertyManagement')}
            // subtitle={t('propertyManagementSb')}
            // text={t('propertyManagementText')}
            subtitle={t('propertyManagementSb', 'management')} // ← CAMBIO
            text={t('propertyManagementText', 'management')}
            t={t}
            reverse={true}
            dark={true}
        />
    )
}

export default TramLicenciasPhone;