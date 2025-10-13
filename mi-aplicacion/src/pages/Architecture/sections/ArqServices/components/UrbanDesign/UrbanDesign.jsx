import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './UrbanDesign.css';

function UrbanDesign({ t }) {
    return (
        <ServicesLayout
            bgImage="/Images/Architecture/services/1.png"
            image="/Images/Architecture/services/2.png"
            title={t('diseñoUrbano')}
            subtitle={t('urbanDesignSubtitle')}
            text={t('urbanDesignText')}
            t={t}
        />
    )
}

export default UrbanDesign;