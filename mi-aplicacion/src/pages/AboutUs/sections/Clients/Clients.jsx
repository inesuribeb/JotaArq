// import MiniTitle from '../../../../components/Titles/MiniTitle'
// import './Clients.css';

// function Clients({ t }) {

//     const ClientsLogo = [
//         {id: 1, logoImg: "/Images/ClientsLogos/1.ClientLogo.png"},
//         {id: 2, logoImg: "/Images/ClientsLogos/2.ClientLogo.png"},
//         {id: 3, logoImg: "/Images/ClientsLogos/3.ClientLogo.png"},
//         {id: 4, logoImg: "/Images/ClientsLogos/4.ClientLogo.png"},
//         {id: 5, logoImg: "/Images/ClientsLogos/5.ClientLogo.png"},
//         {id: 6, logoImg: "/Images/ClientsLogos/6.ClientLogo.png"},
//         {id: 7, logoImg: "/Images/ClientsLogos/7.ClientLogo.png"},
//         {id: 8, logoImg: "/Images/ClientsLogos/8.ClientLogo.png"},
//         {id: 9, logoImg: "/Images/ClientsLogos/9.ClientLogo.png"},
//         {id: 10, logoImg: "/Images/ClientsLogos/10.ClientLogo.png"},
//     ]
    
//     return (
//         <section className='clients-section'>
//             <MiniTitle text={t('trustingUs')} />
//             <div className='slider-Logos'>

//             </div>
//         </section>
//     )
// }

// export default Clients;



import { useRef, useState, useEffect } from 'react';
import MiniTitle from '../../../../components/Titles/MiniTitle'
import './Clients.css';

function Clients({ t }) {
    const sliderRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const ClientsLogo = [
        {id: 1, logoImg: "/Images/ClientsLogos/1.ClientLogo.png"},
        {id: 2, logoImg: "/Images/ClientsLogos/2.ClientLogo.png"},
        {id: 3, logoImg: "/Images/ClientsLogos/3.ClientLogo.png"},
        {id: 4, logoImg: "/Images/ClientsLogos/4.ClientLogo.png"},
        {id: 5, logoImg: "/Images/ClientsLogos/5.ClientLogo.png"},
        {id: 6, logoImg: "/Images/ClientsLogos/6.ClientLogo.png"},
        {id: 7, logoImg: "/Images/ClientsLogos/7.ClientLogo.png"},
        {id: 8, logoImg: "/Images/ClientsLogos/8.ClientLogo.png"},
        {id: 9, logoImg: "/Images/ClientsLogos/9.ClientLogo.png"},
        {id: 10, logoImg: "/Images/ClientsLogos/10.ClientLogo.png"},
    ]

    const checkScroll = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            
            // Mostrar flecha izquierda si no estamos al inicio
            setShowLeftArrow(scrollLeft > 0);
            
            // Mostrar flecha derecha si no estamos al final
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 300; // Cantidad de scroll en px
            const newScrollPosition = direction === 'left' 
                ? sliderRef.current.scrollLeft - scrollAmount
                : sliderRef.current.scrollLeft + scrollAmount;
            
            sliderRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            checkScroll();
            slider.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            
            return () => {
                slider.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);
    
    return (
        <section className='clients-section'>
            <MiniTitle text={t('trustingUs')} />
            <div className='slider-container'>
                {showLeftArrow && (
                    <button 
                        className='slider-arrow slider-arrow-left' 
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                    >
                        ←
                    </button>
                )}
                
                <div className='slider-logos' ref={sliderRef}>
                    {ClientsLogo.map((client) => (
                        <div key={client.id} className='logo-item'>
                            <img src={client.logoImg} alt={`Client ${client.id}`} />
                        </div>
                    ))}
                </div>

                {showRightArrow && (
                    <button 
                        className='slider-arrow slider-arrow-right' 
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                    >
                        →
                    </button>
                )}
            </div>
        </section>
    )
}

export default Clients;