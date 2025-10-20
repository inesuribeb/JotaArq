import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './UrbanDesign.css';

function UrbanDesignPhone({ t }) {
    return (
        <ServicesLayoutPhone
            bgImage="/Images/Architecture/services/1.png"
            image="/Images/Architecture/services/2.png"
            title={t('diseñoUrbano')}
            subtitle={t('urbanDesignSubtitle')}
            text={t('urbanDesignText')}
            t={t}
            dark={true}

        />
    )
}

export default UrbanDesignPhone;