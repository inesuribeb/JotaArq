import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './LicensesPhone.css';

function LicensesPhone({ t }) {
    return (
        <ServicesLayoutPhone
            bgImage="/Images/Architecture/services/residential/NEGUBIDEMOVIL.png"
            image="/Images/Architecture/services/prueba2.jpg"
            title={t('tramitacionLicencias')}
            // subtitle={t('licensesSubtitle')}
            // text={t('licensesText')}
            subtitle={t('licensesSubtitle', 'architecture')}
            text={t('licensesText', 'architecture')}
            t={t}
            dark={true}
        />
    )
}

export default LicensesPhone;