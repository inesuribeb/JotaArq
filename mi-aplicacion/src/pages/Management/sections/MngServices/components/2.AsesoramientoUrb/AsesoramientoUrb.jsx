import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './AsesoramientoUrb.css';

function AsesoramientoUrb({ t }) {
    return (
        <ServicesLayout
            // bgImage="/Images/Management/services/projectMonitoring/02.jpg"
            bgImage="/Images/Management/services/projectManagement/01S.JPG"
            image="/Images/Management/services/projectMonitoring/02.jpg"
            title={t('projectMonitoring')}
            subtitle={t('projectMonitoringSb')}
            text={t('projectMonitoringText')}
            t={t}
            reverse={true} 
        />
    )
}

export default AsesoramientoUrb;