import Texts from '../../../../../components/Texts/Texts';
import ButtonGeneral from '../../../../../components/Button/ButtonGeneral';
import './IntroLayout.css';

function IntroLayout({ t, titleKey, title, subtitleKey, subtitle, textKey, text, buttonTextKey, buttonText, buttonRoute, imageSrc, imageAlt }) {

    return (
        <section className='layout-intro-services'>
            <div className='column1'>
                <h4>{t(titleKey)}</h4>
                <h5>{t(subtitleKey)}</h5>
                <Texts text={t(textKey)} />
                <ButtonGeneral color="secondary" text={t(buttonTextKey)} route={buttonRoute} />
            </div>

            <div className='column2'>
                <img src={imageSrc} alt={imageAlt} />
            </div>
        </section>
    );
}

export default IntroLayout;