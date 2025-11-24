import Texts from '../../../../../components/Texts/Texts';
import ButtonGeneral from '../../../../../components/Button/ButtonGeneral';
import './JetasLayout.css';

function JetasLayout({
    t,
    titleKey,
    subtitleKey,
    textKey,
    buttonTextKey,
    buttonRoute,
    imageSrc,
    imageAlt,
    reverse = false,
    darkVariant = false,
    buttonColor = "secondary",
    isVideo = false
}) {
    return (
        <section className={`jetas-layout ${reverse ? 'reverse' : ''} ${darkVariant ? 'dark' : ''}`}>
            <div className='jetacolumn1'>
                {isVideo ? (
                    <video
                        src={imageSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                ) : (
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                    />
                )}
            </div>

            <div className='jetacolumn2'>
                <h4 className="title">{t(titleKey)}</h4>
                <h5 className="subtitle">{t(subtitleKey)}</h5>
                <Texts className="intro-services-home2text" text={t(textKey)} />
                <ButtonGeneral
                    className='button-services-home'
                    color={buttonColor}
                    text={t(buttonTextKey)}
                    route={buttonRoute}
                />
            </div>
        </section>
    )
}

export default JetasLayout;