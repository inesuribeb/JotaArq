import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './DireccionObraPhone.css';

function DireccionObraPhone({ t }) {
    return (
        <ServicesLayoutPhone
        bgImage="/Images/Management/services/costManagement/04.jpg"
        image="/Images/Management/services/gestion1.webp"
        title={t('costManagement')}
        subtitle={t('costManagementSb')}
        text={t('costManagementText')}
        t={t}
    />
    )
}

export default DireccionObraPhone;