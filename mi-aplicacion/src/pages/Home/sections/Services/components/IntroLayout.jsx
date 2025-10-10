import Texts from '../../../../../components/Texts/Texts';
import ButtonGeneral from '../../../../../components/Button/ButtonGeneral';
import './IntroLayout.css';

// function IntroLayout({ t, titleKey, title, subtitleKey, subtitle, textKey, text, buttonTextKey, buttonText, buttonRoute, imageSrc, imageAlt, reverse = false, variant, buttonColor = "secondary", blackBackground = false }) {

//     return (
//         <section className={`layout-intro-services ${reverse ? 'reverse' : ''} ${variant || ''}`}>
//             <div className='black-bg'></div>
//             <div className='column1'>
//                 <h4 className={`title-${variant}`}>{t(titleKey)}</h4>
//                 <h5 className={`subtitle-${variant}`}>{t(subtitleKey)}</h5>
//                 <Texts className={`intro-services-home text-${variant}`} text={t(textKey)} />
                
//                 <ButtonGeneral 
//                     className='button-services-home'
//                     color={buttonColor} 
//                     text={t(buttonTextKey)} 
//                     route={buttonRoute} 
//                 />
//             </div>

//             <div className='column2'>
//                 <img src={imageSrc} alt={imageAlt} />
//             </div>
//         </section>
//     );
// }

function IntroLayout({ t, titleKey, subtitleKey, textKey, buttonTextKey, buttonRoute, imageSrc, imageAlt, reverse = false, variant, buttonColor = "secondary" }) {
    return (
        <section className={`layout-intro-services ${reverse ? 'reverse' : ''} ${variant || ''}`}>
            <div className='black-bg'></div>
            <div className='column1'>
                <h4 className={`title-${variant}`}>{t(titleKey)}</h4>
                
                {/* Marcador para architecture - donde empieza el negro */}
                {variant === 'architecture' && <span className='black-bg-start-marker'></span>}
                
                <h5 className={`subtitle-${variant}`}>{t(subtitleKey)}</h5>
                
                {/* Marcador para management - donde termina el negro */}
                {variant === 'management' && <span className='black-bg-end-marker'></span>}
                
                <Texts className={`intro-services-home text-${variant}`} text={t(textKey)} />
                
                <ButtonGeneral 
                    className='button-services-home'
                    color={buttonColor} 
                    text={t(buttonTextKey)} 
                    route={buttonRoute} 
                />
            </div>

            <div className='column2'>
                <img src={imageSrc} alt={imageAlt} />
            </div>
        </section>
    );
}

export default IntroLayout;