import { useEffect, useRef, useState } from 'react';
import Texts from '../Texts/Texts';
import './ServicesLayout3.css';

function ServicesLayout3({ bgImage, image, title, subtitle, text, reverse, t }) {
    const bgRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [animationKey, setAnimationKey] = useState(0); // Para reiniciar la animación
    
    const bgImages = Array.isArray(bgImage) ? bgImage : [bgImage];
    const isCarousel = bgImages.length > 1;

    useEffect(() => {
        if (!isCarousel) return;

        const interval = setInterval(() => {
            const nextIndex = (currentImageIndex + 1) % bgImages.length;
            setNextImageIndex(nextIndex);
            setIsTransitioning(true);
            
            setTimeout(() => {
                setCurrentImageIndex(nextIndex);
                setIsTransitioning(false);
                setAnimationKey(prev => prev + 1); 
            }, 1000);
            
        }, 3000);

        return () => clearInterval(interval);
    }, [isCarousel, bgImages.length, currentImageIndex]);

    useEffect(() => {
        const handleScroll = () => {
            if (!bgRef.current) return;
    
            const rect = bgRef.current.getBoundingClientRect();
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const distance = viewportCenter - elementCenter;
                
                const parallaxSpeed = 0; 
                const yPos = distance * parallaxSpeed;
                
                const backgrounds = bgRef.current.querySelectorAll('.services-bg-layer');
                backgrounds.forEach(bg => {
                    bg.style.backgroundPosition = `center calc(50% + ${yPos}px)`;
                });
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={bgRef} className='services-layout3'>
            <div 
                className='services-bg-layer services-bg-current'
                style={{ backgroundImage: `url(${bgImages[currentImageIndex]})` }}
            />
            
            {isCarousel && (
                <div 
                    className={`services-bg-layer services-bg-next ${isTransitioning ? 'services-bg-visible' : ''}`}
                    style={{ backgroundImage: `url(${bgImages[nextImageIndex]})` }}
                />
            )}

            {isCarousel && (
                <div className="services-carousel-indicators">
                    {bgImages.map((_, index) => (
                        <button
                            key={`${index}-${animationKey}`}
                            className={`services-carousel-dot ${index === currentImageIndex ? 'services-carousel-dot-active' : ''}`}
                            onClick={() => {
                                setNextImageIndex(index);
                                setIsTransitioning(true);
                                setTimeout(() => {
                                    setCurrentImageIndex(index);
                                    setIsTransitioning(false);
                                    setAnimationKey(prev => prev + 1);
                                }, 1000);
                            }}
                            aria-label={`Ir a imagen ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            <div className={`services-content3 ${reverse ? 'reverse' : ''}`}>
                <div className='services-text3'>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </div>
            </div>
        </section>
    )
}

export default ServicesLayout3;