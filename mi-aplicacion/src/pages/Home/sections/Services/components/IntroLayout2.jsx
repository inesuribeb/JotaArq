import { useEffect, useRef } from 'react';
import Texts from '../../../../../components/Texts/Texts';
import ButtonGeneral from '../../../../../components/Button/ButtonGeneral';
import './IntroLayout2.css';

function IntroLayout2({ t, titleKey, subtitleKey, textKey, buttonTextKey, buttonRoute, imageSrc, imageAlt, reverse = false, variant, buttonColor = "secondary" }) {
    const blackBgRef = useRef(null);
    const markerRef = useRef(null);
    const column1Ref = useRef(null);
    
    useEffect(() => {
        if (!blackBgRef.current || !markerRef.current || !column1Ref.current) return;
        
        const updatePosition = () => {
            const marker = markerRef.current;
            const blackBg = blackBgRef.current;
            const column1 = column1Ref.current;
            const section = column1.closest('.layout-intro-services');
            
            // Obtener la posición del marcador relativa a column1
            const markerOffsetInColumn = marker.offsetTop;
            // Obtener la posición de column1 relativa a la sección
            const column1OffsetInSection = column1.offsetTop;
            // Posición total del marcador en la sección
            const markerTotalOffset = column1OffsetInSection + markerOffsetInColumn;
            
            if (variant === 'architecture') {
                // Desde el marcador hasta el final
                blackBg.style.top = `${markerTotalOffset}px`;
                blackBg.style.bottom = '0';
                blackBg.style.height = 'auto';
            } else if (variant === 'management') {
                // Desde el inicio hasta el marcador
                blackBg.style.top = '0';
                blackBg.style.height = `${markerTotalOffset}px`;
                blackBg.style.bottom = 'auto';
            }
        };
        
        updatePosition();
        window.addEventListener('resize', updatePosition);
        
        // También actualizar cuando el contenido cambie
        setTimeout(updatePosition, 100);
        
        return () => window.removeEventListener('resize', updatePosition);
    }, [variant]);
    
    return (
        <section className={`layout-intro-services ${reverse ? 'reverse' : ''} ${variant || ''}`}>
            <div className='black-bg' ref={blackBgRef}></div>
            <div className='column1' ref={column1Ref}>
                <h4 className={`title-${variant}`}>{t(titleKey)}</h4>
                
                {/* Marcador exactamente entre h4 y h5 */}
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
                <img src={imageSrc} alt={imageAlt} />
            </div>
        </section>
    );
}

export default IntroLayout2;