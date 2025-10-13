import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './Edification.css';

function Edification({ t }) {
    return (
        <ServicesLayout
            // bgImage="/Images/Architecture/services/ejemplo1.jpg"
            // image="/Images/Architecture/services/ejemplo1.1.jpg"
            bgImage="/Images/Architecture/Randstand.png"
            image="/Images/Architecture/Randstand.png"
            title={t('edificacion')}
            subtitle={t('edificationSubtitle')}
            text={t('edificationText')}
            t={t}
            reverse={true} 
        />
    )
}

export default Edification;