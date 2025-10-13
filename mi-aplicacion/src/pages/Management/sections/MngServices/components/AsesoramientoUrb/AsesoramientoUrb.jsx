import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './AsesoramientoUrb.css';

function AsesoramientoUrb({ t }) {
    return (
        <ServicesLayout
            // bgImage="/Images/Architecture/services/ejemplo1.jpg"
            // image="/Images/Architecture/services/ejemplo1.1.jpg"
            bgImage="/Images/Management/services/masgestion1.webp"
            image="/Images/Management/services/masgestion2.webp"
            title={t('asesoramientoUrbanistico')}
            subtitle={t('sostenibilitySubtitle')}
            text={t('sostenibilityText')}
            t={t}
            // reverse={true} 
        />
    )
}

export default AsesoramientoUrb;