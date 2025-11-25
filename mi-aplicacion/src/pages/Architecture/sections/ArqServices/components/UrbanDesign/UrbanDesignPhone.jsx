import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './UrbanDesign.css';

function UrbanDesignPhone({ t }) {
    return (
        <ServicesLayoutPhone
            bgImage="/Images/Architecture/services/urbanDesign/01.LAREDO.jpg"
            image="/Images/Architecture/services/2.png"
            title={t('diseñoUrbano')}
            // subtitle={t('urbanDesignSubtitle')}
            // text={t('urbanDesignText')}
            subtitle={t('urbanDesignSubtitle', 'architecture')} // ← CAMBIO
            text={t('urbanDesignText', 'architecture')} 
            t={t}
            dark={true}

        />
    )
}

export default UrbanDesignPhone;