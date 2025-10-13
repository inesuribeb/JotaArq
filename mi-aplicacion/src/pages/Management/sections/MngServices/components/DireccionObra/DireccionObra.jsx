import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './DireccionObra.css';

function DireccionObra({ t }) {
    return (
        <ServicesLayout
        bgImage="/Images/Management/services/gestion4.webp"
        image="/Images/Management/services/gestion1.webp"
        title={t('direccionObra')}
        subtitle={t('direccionObra')}
        text={t('sostenibilityText')}
        t={t}
    />
    )
}

export default DireccionObra;