import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom'; // AÑADE ESTO
import { useNavigate } from 'react-router-dom';
import Texts from '../../../../../components/Texts/Texts';
import ButtonGeneral from '../../../../../components/Button/ButtonGeneral';
import './IntroLayout2.css';

function IntroLayout2({ t, titleKey, subtitleKey, textKey, buttonTextKey, buttonRoute, imageSrc, imageAlt, reverse = false, variant, buttonColor = "secondary" }) {
    const blackBgRef = useRef(null);
    const markerRef = useRef(null);
    const column1Ref = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!blackBgRef.current || !markerRef.current || !column1Ref.current) return;

        const updatePosition = () => {
            const marker = markerRef.current;
            const blackBg = blackBgRef.current;
            const column1 = column1Ref.current;
            const section = column1.closest('.layout-intro-services');

            const markerOffsetInColumn = marker.offsetTop;
            const column1OffsetInSection = column1.offsetTop;
            const markerTotalOffset = column1OffsetInSection + markerOffsetInColumn;

            if (variant === 'architecture') {
                blackBg.style.top = `${markerTotalOffset}px`;
                blackBg.style.bottom = '0';
                blackBg.style.height = 'auto';
            } else if (variant === 'management') {
                blackBg.style.top = '0';
                blackBg.style.height = `${markerTotalOffset}px`;
                blackBg.style.bottom = 'auto';
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);

        setTimeout(updatePosition, 100);

        return () => window.removeEventListener('resize', updatePosition);
    }, [variant]);

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    // const handleMouseEnter = () => {
    //     console.log('Mouse entered!');
    //     setIsHovering(true);
    // };

    // const handleMouseLeave = () => {
    //     console.log('Mouse left!'); 
    //     setIsHovering(false);
    // };

    const handleImageClick = () => {
        if (buttonRoute) {
            if (buttonRoute.startsWith('http://') || buttonRoute.startsWith('https://')) {
                window.open(buttonRoute, '_blank', 'noopener,noreferrer');
            } else if (buttonRoute.startsWith('mailto:')) {
                window.location.href = buttonRoute;
            } else {
                navigate(buttonRoute);
            }
        }
    };

    return (
        <section className={`layout-intro-services ${reverse ? 'reverse' : ''} ${variant || ''}`}>
            <div className='black-bg' ref={blackBgRef}></div>
            <div className='column1' ref={column1Ref}>
                <h4 className={`title-${variant}`}>{t(titleKey)}</h4>

                <span
                    ref={markerRef}
                    className='position-marker'
                    style={{ position: 'relative', display: 'block', height: 0 }}
                ></span>

                <h5 className={`subtitle-${variant}`}>{t(subtitleKey)}</h5>

                <Texts className={`intro-services-home text-${variant}`} text={t(textKey)} />

                <ButtonGeneral
                    className='button-services-home'
                    color={buttonColor}
                    text={t(buttonTextKey)}
                    route={buttonRoute}
                />
            </div>

            <div className='column2'>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleImageClick}
                />
                {/* {isHovering && (
                    <span 
                        className='explore-button'
                        style={{
                            left: mousePosition.x,
                            top: mousePosition.y,
                        }}
                    >
                        {t('explore')}
                    </span>
                )} */}
                {/* MUEVE el explore-button FUERA y usa createPortal */}
                {isHovering && createPortal(
                    <span
                        className='explore-button'
                        style={{
                            left: mousePosition.x,
                            top: mousePosition.y,
                        }}
                    >
                        {t('explore')}
                    </span>,
                    document.body // Lo renderiza directamente en el body
                )}
            </div>
        </section>
    );
}

export default IntroLayout2;