// import { useEffect, useRef, useState } from 'react';
// import Texts from '../Texts/Texts';
// import { HiChevronDown } from 'react-icons/hi2';

// import './ServicesLayoutPhone.css';

// function ServicesLayoutPhone({ bgImage, title, subtitle, text, dark, t }) {
//     const [isDragging, setIsDragging] = useState(false);
//     const [startX, setStartX] = useState(0);
//     const [scrollLeftStart, setScrollLeftStart] = useState(0);
//     const carouselRef = useRef(null);
//     const animationRef = useRef(null);
//     const pauseTimeoutRef = useRef(null);
//     const isPausedRef = useRef(false);
//     const scrollSpeed = 0.5; 

//     const images = Array.isArray(bgImage) ? bgImage : [bgImage];
//     const isCarousel = images.length > 1;

//     useEffect(() => {
//         if (!isCarousel || !carouselRef.current) return;

//         const carousel = carouselRef.current;

//         const autoScroll = () => {
//             if (!isPausedRef.current && carousel) {
//                 carousel.scrollLeft += scrollSpeed;

//                 const maxScroll = carousel.scrollWidth / 2;
//                 if (carousel.scrollLeft >= maxScroll) {
//                     carousel.scrollLeft = 0;
//                 }
//             }
//             animationRef.current = requestAnimationFrame(autoScroll);
//         };

//         animationRef.current = requestAnimationFrame(autoScroll);

//         return () => {
//             if (animationRef.current) {
//                 cancelAnimationFrame(animationRef.current);
//             }
//         };
//     }, [isCarousel, scrollSpeed]);

//     const handleTouchStart = (e) => {
//         if (!isCarousel) return;

//         isPausedRef.current = true;
//         setIsDragging(true);

//         const touch = e.touches[0];
//         setStartX(touch.clientX);
//         setScrollLeftStart(carouselRef.current.scrollLeft);

//         if (pauseTimeoutRef.current) {
//             clearTimeout(pauseTimeoutRef.current);
//         }
//     };

//     const handleTouchMove = (e) => {
//         if (!isDragging || !isCarousel) return;

//         e.preventDefault();
//         const touch = e.touches[0];
//         const x = touch.clientX;
//         const walk = startX - x; 

//         carouselRef.current.scrollLeft = scrollLeftStart + walk;
//     };

//     const handleTouchEnd = () => {
//         if (!isCarousel) return;

//         setIsDragging(false);

//         pauseTimeoutRef.current = setTimeout(() => {
//             isPausedRef.current = false;
//         }, 3000);
//     };

//     useEffect(() => {
//         return () => {
//             if (pauseTimeoutRef.current) {
//                 clearTimeout(pauseTimeoutRef.current);
//             }
//             if (animationRef.current) {
//                 cancelAnimationFrame(animationRef.current);
//             }
//         };
//     }, []);

//     return (
//         <section className={`services-layout-phone ${dark ? 'dark' : ''}`}>
//             <div className='services-text-phone'>
//                 <h3>{title}</h3>
//                 <h4>{subtitle}</h4>
//             </div>

//             <div className='services-image-phone'>
//                 {isCarousel ? (
//                     <div
//                         className='carousel-container-onemore'
//                         ref={carouselRef}
//                         onTouchStart={handleTouchStart}
//                         onTouchMove={handleTouchMove}
//                         onTouchEnd={handleTouchEnd}
//                     >
//                         <div className='carousel-track-onemore'>
//                             {images.map((img, index) => (
//                                 <div key={`first-${index}`} className='carousel-slide-onemore'>
//                                     <img
//                                         src={img}
//                                         alt={`${title} ${index + 1}`}
//                                         draggable="false"
//                                     />
//                                 </div>
//                             ))}
//                             {images.map((img, index) => (
//                                 <div key={`second-${index}`} className='carousel-slide-onemore'>
//                                     <img
//                                         src={img}
//                                         alt={`${title} ${index + 1}`}
//                                         draggable="false"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ) : (
//                     <img src={bgImage} alt={title} />
//                 )}
//             </div>

//             <div className='content-service-management'>
//                 <h5 className='aboutService-phone'>{t('aboutService')} <HiChevronDown className="up-arrow-icon" size={20} strokeWidth={3} /></h5>
//                 <div>
//                 <Texts className='services-text-desc-phone' text={text} />
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ServicesLayoutPhone;

import { useEffect, useRef, useState } from 'react';
import Texts from '../Texts/Texts';
import { HiChevronDown } from 'react-icons/hi2';

import './ServicesLayoutPhone.css';

function ServicesLayoutPhone({ bgImage, title, subtitle, text, dark, t }) {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);
    const [isTextVisible, setIsTextVisible] = useState(false); // Nuevo estado
    const carouselRef = useRef(null);
    const animationRef = useRef(null);
    const pauseTimeoutRef = useRef(null);
    const isPausedRef = useRef(false);
    const scrollSpeed = 0.5; 

    const images = Array.isArray(bgImage) ? bgImage : [bgImage];
    const isCarousel = images.length > 1;

    useEffect(() => {
        if (!isCarousel || !carouselRef.current) return;

        const carousel = carouselRef.current;

        const autoScroll = () => {
            if (!isPausedRef.current && carousel) {
                carousel.scrollLeft += scrollSpeed;

                const maxScroll = carousel.scrollWidth / 2;
                if (carousel.scrollLeft >= maxScroll) {
                    carousel.scrollLeft = 0;
                }
            }
            animationRef.current = requestAnimationFrame(autoScroll);
        };

        animationRef.current = requestAnimationFrame(autoScroll);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isCarousel, scrollSpeed]);

    const handleTouchStart = (e) => {
        if (!isCarousel) return;

        isPausedRef.current = true;
        setIsDragging(true);

        const touch = e.touches[0];
        setStartX(touch.clientX);
        setScrollLeftStart(carouselRef.current.scrollLeft);

        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current);
        }
    };

    const handleTouchMove = (e) => {
        if (!isDragging || !isCarousel) return;

        e.preventDefault();
        const touch = e.touches[0];
        const x = touch.clientX;
        const walk = startX - x;

        carouselRef.current.scrollLeft = scrollLeftStart + walk;
    };

    const handleTouchEnd = () => {
        if (!isCarousel) return;

        setIsDragging(false);

        pauseTimeoutRef.current = setTimeout(() => {
            isPausedRef.current = false;
        }, 3000);
    };

    // Función toggle
    const toggleText = () => {
        setIsTextVisible(!isTextVisible);
    };

    useEffect(() => {
        return () => {
            if (pauseTimeoutRef.current) {
                clearTimeout(pauseTimeoutRef.current);
            }
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <section className={`services-layout-phone ${dark ? 'dark' : ''}`}>
            <div className='services-text-phone'>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>

            <div className='services-image-phone'>
                {isCarousel ? (
                    <div
                        className='carousel-container-onemore'
                        ref={carouselRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className='carousel-track-onemore'>
                            {images.map((img, index) => (
                                <div key={`first-${index}`} className='carousel-slide-onemore'>
                                    <img
                                        src={img}
                                        alt={`${title} ${index + 1}`}
                                        draggable="false"
                                    />
                                </div>
                            ))}
                            {images.map((img, index) => (
                                <div key={`second-${index}`} className='carousel-slide-onemore'>
                                    <img
                                        src={img}
                                        alt={`${title} ${index + 1}`}
                                        draggable="false"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <img src={bgImage} alt={title} />
                )}
            </div>

            <div className='content-service-management'>
                <h5 
                    className='aboutService-phone' 
                    onClick={toggleText}
                    style={{ cursor: 'pointer' }}
                >
                    {t('aboutService')} 
                    <HiChevronDown 
                        className={`up-arrow-icon ${isTextVisible ? 'rotated' : ''}`}
                        size={20} 
                        strokeWidth={3} 
                    />
                </h5>
                
                {isTextVisible && (
                    <div className='text-content-wrapper'>
                        <Texts className='services-text-desc-phone' text={text} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default ServicesLayoutPhone;