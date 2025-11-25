import ServicesLayout3 from '../../../../../../components/ServicesLayout/ServicesLayout3';
import './Edification.css';

function Edification({ t }) {
    return (
        <ServicesLayout3
            // bgImage="/Images/Architecture/Randstand.png"
            bgImage={[
                "/Images/Architecture/services/corporative/01.jpg",
                "/Images/Architecture/services/corporative/desktop2.jpg",
                "/Images/Architecture/services/corporative/desktop3.jpg",
                "/Images/Architecture/services/corporative/desktop4.JPG",
                "/Images/Architecture/services/corporative/desktop5.jpg",
                "/Images/Architecture/services/corporative/desktop6.jpg",
                "/Images/Architecture/services/corporative/desktop7.jpg",
                "/Images/Architecture/services/corporative/desktop8.JPG",
            ]}
            image="/Images/Architecture/Randstand.png"
            title={t('edificacion')}
            // subtitle={t('edificationSubtitle')}
            // text={t('edificationText')}
            subtitle={t('edificationSubtitle', 'architecture')} // ← CAMBIO
            text={t('edificationText', 'architecture')} 
            t = { t }
        // reverse={true} 
        />
    )
}

export default Edification;