import { useEffect, useRef } from 'react';
import Texts from '../Texts/Texts';
import './ServicesLayout2.css';

function ServicesLayout({ bgImage, image, title, subtitle, text, reverse, t }) {

    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!bgRef.current) return;
    
            const rect = bgRef.current.getBoundingClientRect();
            const scrolled = window.scrollY;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const distance = viewportCenter - elementCenter;
                
                const parallaxSpeed = 0.3; 
                const yPos = distance * parallaxSpeed;
                
                bgRef.current.style.backgroundPosition = `center calc(50% + ${yPos}px)`;
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={bgRef}

            className='services-layout'
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className={`services-content ${reverse ? 'reverse' : ''}`}>
                <div className='services-image'>
                    {/* <img src={image} alt={title} /> */}
                    {/* <h1>{title}</h1> */}
                </div>

                <div className='services-text'>
                    {/* <h3>{title}</h3> */}
                    <h4>{subtitle}</h4>
                    {/* <p>{text}</p> */}
                    <Texts className='services-text-desc' text={text} />

                </div>
            </div>
        </section>
    )
}

export default ServicesLayout;