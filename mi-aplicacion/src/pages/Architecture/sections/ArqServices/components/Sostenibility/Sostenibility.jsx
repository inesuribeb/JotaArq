import ServicesLayout3 from '../../../../../../components/ServicesLayout/ServicesLayout3';
import './Sostenibility.css';

function Sostenibility({ t }) {
    return (
        <ServicesLayout3
            // bgImage="/Images/Architecture/services/plantaSolar.jpg"
            bgImage={[
                "/Images/Architecture/services/sostenibility/01.png",
                "/Images/Architecture/services/sostenibility/02.jpeg",
                "/Images/Architecture/services/sostenibility/03.jpg",
            ]}
            image="/Images/Architecture/services/solar2.jpg"
            title={t('sostenibilidad')}
            subtitle={t('sostenibilitySubtitle')}
            text={t('sostenibilityText')}
            t={t}
            // reverse={true} 
        />
    )
}

export default Sostenibility;