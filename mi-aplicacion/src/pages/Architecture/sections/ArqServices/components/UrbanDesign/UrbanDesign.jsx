import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './UrbanDesign.css';

function UrbanDesign({ t }) {
    return (
        <ServicesLayout
            // bgImage="/Images/Architecture/services/ejemplo1.jpg"
            // image="/Images/Architecture/services/ejemplo1.1.jpg"
            bgImage="/Images/Architecture/services/1.png"
            image="/Images/Architecture/services/2.png"
            title={t('urbanDesignTitle')}
            subtitle={t('urbanDesignSubtitle')}
            text={t('urbanDesignText')}
            t={t}
        />
    )
}

export default UrbanDesign;