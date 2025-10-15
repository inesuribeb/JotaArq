import Texts from '../../../../../components/Texts/Texts';
import ButtonGeneral from '../../../../../components/Button/ButtonGeneral';
import './IntroLayoutPhone.css';

function IntroLayoutPhone({ t, titleKey, subtitleKey, textKey, buttonTextKey, buttonRoute, imageSrc, imageAlt, buttonColor = "secondary" }) {
    return (
        <section className='intro-layout-phone'>
            <div className='intro-line1-phone' >
                <h4>{t(titleKey)}</h4>
                <h5>{t(subtitleKey)}</h5>
                <Texts className='intro-layout-phone-text' text={t(textKey)} />
                <ButtonGeneral
                    className='button-services-home-phone'
                    color={buttonColor}
                    text={t(buttonTextKey)}
                    route={buttonRoute}
                />
            </div>

            <div className='intro-line2-phone'>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                />             
            </div>
        </section>
    )
}

export default IntroLayoutPhone;