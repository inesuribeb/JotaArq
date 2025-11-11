import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './AsesoramientoUrbPhone.css';

function AsesoramientoUrbPhone({ t }) {
    return (
        <ServicesLayoutPhone
            // bgImage="/Images/Management/services/projectMonitoring/02.jpg"
            bgImage="/Images/Management/services/projectManagement/01S.JPG"
            image="/Images/Management/services/masgestion2.webp"
            title={t('projectMonitoring')}
            subtitle={t('projectMonitoringSb')}
            text={t('projectMonitoringText')}
            t={t}
        />
    )
}

export default AsesoramientoUrbPhone;