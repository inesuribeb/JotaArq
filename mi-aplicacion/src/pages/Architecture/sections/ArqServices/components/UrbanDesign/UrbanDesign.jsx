import ServicesLayout3 from '../../../../../../components/ServicesLayout/ServicesLayout3';
import './UrbanDesign.css';

function UrbanDesign({ t }) {
    return (
        <ServicesLayout3
            bgImage="/Images/Architecture/services/urbanDesign/DESKTOPLAREDO.jpg"
            image="/Images/Architecture/services/2.png"
            title={t('diseñoUrbano')}
            // subtitle={t('urbanDesignSubtitle')}
            // text={t('urbanDesignText')}
            subtitle={t('urbanDesignSubtitle', 'architecture')} // ← CAMBIO
            text={t('urbanDesignText', 'architecture')} 
            t={t}
            reverse={true} 
        />
    )
}

export default UrbanDesign;