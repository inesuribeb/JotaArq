import ServicesLayout3 from '../../../../../../components/ServicesLayout/ServicesLayout3';
import './Licenses.css';

function Licenses({ t }) {
    return (
        <ServicesLayout3
            bgImage="/Images/Architecture/services/residential/01.jpg"
            image="/Images/Architecture/services/prueba2.jpg"
            title={t('tramitacionLicencias')}
            subtitle={t('licensesSubtitle')}
            text={t('licensesText')}
            t={t}
            reverse={true} 
        />
    )
}

export default Licenses;