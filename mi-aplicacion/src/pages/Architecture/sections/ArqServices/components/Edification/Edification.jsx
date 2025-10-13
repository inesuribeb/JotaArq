import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './Edification.css';

function Edification({ t }) {
    return (
        <ServicesLayout
            // bgImage="/Images/Architecture/services/ejemplo1.jpg"
            // image="/Images/Architecture/services/ejemplo1.1.jpg"
            bgImage="/Images/Architecture/services/ejemplo1.jpg"
            image="/Images/Architecture/services/ejemplo1.1.jpg"
            title={t('urbanDesignTitle')}
            subtitle={t('urbanDesignSubtitle')}
            text={t('urbanDesignText')}
            t={t}
        />
    )
}

export default Edification;