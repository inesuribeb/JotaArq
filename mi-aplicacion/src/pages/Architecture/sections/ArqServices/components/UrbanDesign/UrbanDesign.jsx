import ServicesLayout3 from '../../../../../../components/ServicesLayout/ServicesLayout3';
import './UrbanDesign.css';

function UrbanDesign({ t }) {
    return (
        <ServicesLayout3
            bgImage="/Images/Architecture/services/urbanDesign/01.LAREDO.jpg"
            image="/Images/Architecture/services/2.png"
            title={t('diseñoUrbano')}
            subtitle={t('urbanDesignSubtitle')}
            text={t('urbanDesignText')}
            t={t}
            reverse={true} 
        />
    )
}

export default UrbanDesign;