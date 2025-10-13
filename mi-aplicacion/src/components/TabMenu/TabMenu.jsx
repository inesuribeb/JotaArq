import { useState, useEffect, useRef } from 'react';
import { useHeader } from '../../contexts/HeaderContext'; 
import './TabMenu.css';

function TabMenu({ services, t }) {
    const [activeTab, setActiveTab] = useState(0);
    const { headerVisible, headerHeight } = useHeader();
    const menuRef = useRef(null);

    const handleTabClick = (index, sectionId) => {
        setActiveTab(index);
        const section = document.getElementById(sectionId);
        if (section && menuRef.current) {
            const menuHeight = menuRef.current.offsetHeight;
            const headerOffset = headerVisible ? headerHeight : 0;
            const sectionTop = section.getBoundingClientRect().top;
            const currentScrollY = window.scrollY;
            
            const targetPosition = currentScrollY + sectionTop - headerOffset - menuHeight - 10;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!menuRef.current) return;
            
            const sections = services.map(service => 
                document.getElementById(service.sectionId)
            );

            const menuRect = menuRef.current.getBoundingClientRect();
            const referencePoint = menuRect.bottom + 20;
            
            let currentActive = 0;
            
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    
                    if (rect.top <= referencePoint && rect.bottom > referencePoint) {
                        currentActive = i;
                        break;
                    }
                    else if (rect.bottom < referencePoint && i < sections.length - 1) {
                        const nextSection = sections[i + 1];
                        if (nextSection) {
                            const nextRect = nextSection.getBoundingClientRect();
                            if (nextRect.top > referencePoint) {
                                currentActive = i;
                                break;
                            }
                        }
                    }
                }
            }
            
            const lastSection = sections[sections.length - 1];
            if (lastSection) {
                const lastRect = lastSection.getBoundingClientRect();
                if (lastRect.top < referencePoint) {
                    currentActive = sections.length - 1;
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
    }, [services, headerVisible, headerHeight]);

    return (
        <nav ref={menuRef} className="tab-menu">
            <div className="tab-menu-container">
                {services.map((service, index) => (
                    <button
                        key={service.id}
                        className={`tab-item ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index, service.sectionId)}
                    >
                        {t(service.nameKey)} 
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default TabMenu;