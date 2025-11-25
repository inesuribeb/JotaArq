import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './AsesoramientoUrbPhone.css';

function AsesoramientoUrbPhone({ t }) {
    return (
        <ServicesLayoutPhone
            // bgImage="/Images/Management/services/projectMonitoring/02.jpg"
            // bgImage="/Images/Management/services/projectManagement/01S.JPG"
            // image="/Images/Management/services/masgestion2.webp"
            bgImage="/Images/Management/services/projectMonitoring/movilMonitoring.JPG"
            title={t('projectMonitoring')}
            // subtitle={t('projectMonitoringSb')}
            // text={t('projectMonitoringText')}
            subtitle={t('projectMonitoringSb', 'management')} // ← CAMBIO
            text={t('projectMonitoringText', 'management')}
            t={t}
        />
    )
}

export default AsesoramientoUrbPhone;