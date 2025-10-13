import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './Licenses.css';

function Licenses({ t }) {
    return (
        <ServicesLayout
            bgImage="/Images/Architecture/services/prueba.jpg"
            image="/Images/Architecture/services/prueba2.jpg"
            title={t('tramitacionLicencias')}
            subtitle={t('licensesSubtitle')}
            text={t('licensesText')}
            t={t}
        />
    )
}

export default Licenses;