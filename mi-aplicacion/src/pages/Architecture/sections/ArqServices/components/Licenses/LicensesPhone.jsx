import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './LicensesPhone.css';

function LicensesPhone({ t }) {
    return (
        <ServicesLayoutPhone
            bgImage="/Images/Architecture/services/prueba.jpg"
            image="/Images/Architecture/services/prueba2.jpg"
            title={t('tramitacionLicencias')}
            subtitle={t('licensesSubtitle')}
            text={t('licensesText')}
            t={t}
        />
    )
}

export default LicensesPhone;