import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './DireccionObra.css';

function DireccionObra({ t }) {
    return (
        <ServicesLayout
            bgImage="/Images/Management/services/costManagement/04.jpg"
            image="/Images/Management/services/gestion1.webp"
            title={t('costManagement')}
            // subtitle={t('costManagementSb')}
            // text={t('costManagementText')}
            subtitle={t('costManagementSb', 'management')} // ← CAMBIO
            text={t('costManagementText', 'management')}
            t={t}
            reverse={true}
        />
    )
}

export default DireccionObra;