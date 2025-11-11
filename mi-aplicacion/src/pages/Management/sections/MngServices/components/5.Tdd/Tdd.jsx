import ServicesLayout from '../../../../../../components/ServicesLayout/ServicesLayout';
import './Tdd.css';

function Tdd({ t }) {
    return (
        <ServicesLayout
        bgImage="/Images/Management/services/tdd/05.JPG"
        image="/Images/Management/services/gestion1.webp"
        title={t('tddTechnical')}
        subtitle={t('tddTechnicalSb')}
        text={t('tddTechnicalText')}
        t={t}
        // reverse={true} 
    />
    )
}

export default Tdd;