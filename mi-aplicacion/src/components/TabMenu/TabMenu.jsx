// import { useState, useEffect, useRef } from 'react';
// import { useHeader } from '../../contexts/HeaderContext'; 
// import './TabMenu.css';

// function TabMenu({ services, t }) {
//     const [activeTab, setActiveTab] = useState(0);
//     const { headerVisible, headerHeight } = useHeader();
//     const menuRef = useRef(null);

//     const handleTabClick = (index, sectionId) => {
//         setActiveTab(index);
//         const section = document.getElementById(sectionId);
//         if (section && menuRef.current) {
//             const menuHeight = menuRef.current.offsetHeight;
//             const headerOffset = headerVisible ? headerHeight : 0;
//             const sectionTop = section.getBoundingClientRect().top;
//             const currentScrollY = window.scrollY;
            
//             const targetPosition = currentScrollY + sectionTop - headerOffset - menuHeight - 10;
            
//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!menuRef.current) return;
            
//             const sections = services.map(service => 
//                 document.getElementById(service.sectionId)
//             );

//             const menuRect = menuRef.current.getBoundingClientRect();
//             const referencePoint = menuRect.bottom + 20;
            
//             let currentActive = 0;
            
//             for (let i = 0; i < sections.length; i++) {
//                 const section = sections[i];
//                 if (section) {
//                     const rect = section.getBoundingClientRect();
                    
//                     if (rect.top <= referencePoint && rect.bottom > referencePoint) {
//                         currentActive = i;
//                         break;
//                     }
//                     else if (rect.bottom < referencePoint && i < sections.length - 1) {
//                         const nextSection = sections[i + 1];
//                         if (nextSection) {
//                             const nextRect = nextSection.getBoundingClientRect();
//                             if (nextRect.top > referencePoint) {
//                                 currentActive = i;
//                                 break;
//                             }
//                         }
//                     }
//                 }
//             }
            
//             const lastSection = sections[sections.length - 1];
//             if (lastSection) {
//                 const lastRect = lastSection.getBoundingClientRect();
//                 if (lastRect.top < referencePoint) {
//                     currentActive = sections.length - 1;
//                 }
//             }
            
//             setActiveTab(currentActive);
//         };

//         handleScroll();
        
//         let ticking = false;
//         const scrollHandler = () => {
//             if (!ticking) {
//                 window.requestAnimationFrame(() => {
//                     handleScroll();
//                     ticking = false;
//                 });
//                 ticking = true;
//             }
//         };

//         window.addEventListener('scroll', scrollHandler);
//         return () => window.removeEventListener('scroll', scrollHandler);
//     }, [services, headerVisible, headerHeight]);

//     return (
//         <nav ref={menuRef} className="tab-menu">
//             <div className="tab-menu-container">
//                 {services.map((service, index) => (
//                     <button
//                         key={service.id}
//                         className={`tab-item ${activeTab === index ? 'active' : ''}`}
//                         onClick={() => handleTabClick(index, service.sectionId)}
//                     >
//                         {t(service.nameKey)} 
//                     </button>
//                 ))}
//             </div>
//         </nav>
//     );
// }

// export default TabMenu;



import { useState, useEffect, useRef } from 'react';
import { useHeader } from '../../contexts/HeaderContext'; 
import './TabMenu.css';

function TabMenu({ services, t }) {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState(null);
    const { headerVisible, headerHeight } = useHeader();
    const menuRef = useRef(null);
    const containerRef = useRef(null);
    const tabRefs = useRef([]);

    const updateBackgroundPosition = () => {
        const targetIndex = hoveredTab !== null ? hoveredTab : activeTab;
        const targetTab = tabRefs.current[targetIndex];
        const container = containerRef.current;

        if (targetTab && container) {
            const containerRect = container.getBoundingClientRect();
            const tabRect = targetTab.getBoundingClientRect();
            
            const left = tabRect.left - containerRect.left;
            const width = tabRect.width;
            const height = tabRect.height;
            const top = tabRect.top - containerRect.top;

            container.style.setProperty('--bg-left', `${left}px`);
            container.style.setProperty('--bg-width', `${width}px`);
            container.style.setProperty('--bg-height', `${height}px`);
            container.style.setProperty('--bg-top', `${top}px`);
        }
    };

    useEffect(() => {
        updateBackgroundPosition();
    }, [activeTab, hoveredTab]);

    useEffect(() => {
        // Recalcular en resize
        window.addEventListener('resize', updateBackgroundPosition);
        return () => window.removeEventListener('resize', updateBackgroundPosition);
    }, [activeTab, hoveredTab]);

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
            const referencePoint = menuRect.top - 50;
            
            let currentActive = 0;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    
                    if (rect.top <= referencePoint) {
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
    }, [services, headerVisible, headerHeight]);

    return (
        <nav ref={menuRef} className="tab-menu">
            <div 
                ref={containerRef}
                className="tab-menu-container"
                style={{
                    '--bg-left': '0px',
                    '--bg-width': '0px',
                    '--bg-height': '0px',
                    '--bg-top': '0px'
                }}
            >
                {services.map((service, index) => (
                    <button
                        key={service.id}
                        ref={el => tabRefs.current[index] = el}
                        className={`tab-item ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index, service.sectionId)}
                        onMouseEnter={() => setHoveredTab(index)}
                        onMouseLeave={() => setHoveredTab(null)}
                    >
                        {t(service.nameKey)} 
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default TabMenu;