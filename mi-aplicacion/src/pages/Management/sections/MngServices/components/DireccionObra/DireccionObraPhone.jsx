import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './DireccionObraPhone.css';

function DireccionObraPhone({ t }) {
    return (
        <ServicesLayoutPhone
        bgImage="/Images/Management/services/gestion4.webp"
        image="/Images/Management/services/gestion1.webp"
        title={t('direccionObra')}
        subtitle={t('direccionObra')}
        text={t('sostenibilityText')}
        t={t}
    />
    )
}

export default DireccionObraPhone;