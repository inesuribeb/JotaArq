import { useState, useRef, useEffect } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';
import './TabMenuPhone.css';

function TabMenuPhone({ servicesPhone, t }) {
    const [activeTab, setActiveTab] = useState(0);
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Función para verificar si se puede hacer scroll
    const checkScrollability = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    // Verificar scroll al montar y cuando cambie el tamaño
    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, []);

    // Función para hacer scroll a la izquierda
    const scrollLeft = () => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollBy({
                left: -150,
                behavior: 'smooth'
            });
        }
    };

    // Función para hacer scroll a la derecha
    const scrollRight = () => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollBy({
                left: 150,
                behavior: 'smooth'
            });
        }
    };

    const handleTabClick = (index, sectionId) => {
        setActiveTab(index);
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.getBoundingClientRect().top;
            const currentScrollY = window.scrollY;
            
            const targetPosition = currentScrollY + sectionTop - 80;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Detectar scroll para cambiar tab activo
    useEffect(() => {
        const handleScroll = () => {
            const sections = servicesPhone.map(service => 
                document.getElementById(service.sectionId)
            );

            let currentActive = 0;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    
                    if (rect.top <= 150) {
                        currentActive = i;
                        break;
                    }
                }
            }
            
            setActiveTab(currentActive);
        };

        handleScroll();
        
        let ticking = false;
        const scrollHandler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [servicesPhone]);

    return (
        <nav className="tab-menu-phone">
            <div 
                ref={scrollContainerRef}
                className="tab-menu-phone-container"
                onScroll={checkScrollability}
            >
                {servicesPhone.map((service, index) => (
                    <button
                        key={service.id}
                        className={`tab-item-phone ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index, service.sectionId)}
                    >
                        {t(service.nameKey)}
                    </button>
                ))}
            </div>

            {/* <div className='buttons-arrow-tab'>
                <button 
                    className={`arrow-button ${!canScrollLeft ? 'disabled' : ''}`}
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                    aria-label="Scroll left"
                >
                    <HiChevronLeft />
                </button>
                <button 
                    className={`arrow-button ${!canScrollRight ? 'disabled' : ''}`}
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                    aria-label="Scroll right"
                >
                    <HiChevronRight />
                </button>
            </div> */}
        </nav>
    );
}

export default TabMenuPhone;