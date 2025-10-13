import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './AsesoramientoUrb.css';

function AsesoramientoUrb({ t }) {
    return (
        <ServicesLayout
            bgImage="/Images/Management/services/masgestion1.webp"
            image="/Images/Management/services/masgestion2.webp"
            title={t('asesoramientoUrbanistico')}
            subtitle={t('sostenibilitySubtitle')}
            text={t('sostenibilityText')}
            t={t}
        />
    )
}

export default AsesoramientoUrb;