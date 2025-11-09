import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './TddPhone.css';

function TddPhone({ t }) {
    return (
        <ServicesLayoutPhone
        bgImage="/Images/Management/services/tdd/05.JPG"
        image="/Images/Management/services/gestion1.webp"
        title={t('tddTechnical')}
        subtitle={t('tddTechnicalSb')}
        text={t('tddTechnicalText')}
        t={t}
    />
    )
}

export default TddPhone;