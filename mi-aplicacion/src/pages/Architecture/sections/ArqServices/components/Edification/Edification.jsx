import ServicesLayout3 from '../../../../../../components/ServicesLayout/ServicesLayout3';
import './Edification.css';

function Edification({ t }) {
    return (
        <ServicesLayout3
            // bgImage="/Images/Architecture/Randstand.png"
            bgImage={[
                "/Images/Architecture/services/corporative/01.jpg",
                "/Images/Architecture/services/corporative/02.jpg",
                "/Images/Architecture/services/corporative/03.jpg",
                "/Images/Architecture/services/corporative/04.JPG",
                "/Images/Architecture/services/corporative/05.jpg",
                "/Images/Architecture/services/corporative/06.jpg",
                "/Images/Architecture/services/corporative/07.jpg",
                "/Images/Architecture/services/corporative/08.JPG",
            ]}
            image="/Images/Architecture/Randstand.png"
            title={t('edificacion')}
            subtitle={t('edificationSubtitle')}
            text={t('edificationText')}
            t={t}
            // reverse={true} 
        />
    )
}

export default Edification;