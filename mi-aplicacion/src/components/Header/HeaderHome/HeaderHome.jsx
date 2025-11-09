// import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../../contexts/LanguageContext';
// import NavHome from './NavHome';
// import './HeaderHome.css';

// function HeaderHome() {
//     const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isClosing, setIsClosing] = useState(false);
//     const [buttonWidth, setButtonWidth] = useState('auto');
//     const buttonRef = useRef(null);
//     const textRef = useRef(null);

//     const toggleMenu = () => {
//         if (isMenuOpen) {
//             setIsClosing(true);
//             setTimeout(() => {
//                 setIsMenuOpen(false);
//                 setIsClosing(false);
//             }, 600);
//         } else {
//             setIsMenuOpen(true);
//         }
//     };

//     useEffect(() => {
//         if (buttonRef.current && textRef.current) {
//             const currentWidth = buttonRef.current.offsetWidth;

//             textRef.current.style.opacity = '0';

//             setTimeout(() => {
//                 if (buttonRef.current && textRef.current) {
//                     const tempWidth = buttonRef.current.style.width;
//                     buttonRef.current.style.width = 'auto';
//                     const newWidth = buttonRef.current.offsetWidth;

//                     buttonRef.current.style.width = `${currentWidth}px`;
//                     setButtonWidth(`${currentWidth}px`);

//                     requestAnimationFrame(() => {
//                         setButtonWidth(`${newWidth}px`);

//                         setTimeout(() => {
//                             if (textRef.current) {
//                                 textRef.current.style.opacity = '1';
//                             }
//                         }, 200);
//                     });
//                 }
//             }, 0);
//         }
//     }, [isMenuOpen]);


//     return (
//         <>
//             {isMenuOpen && (
//                 <div className={`menu-overlay ${isClosing ? 'closing' : ''}`}></div>
//             )}

//             <div className='header-home-content'>
//                 <Link to={getRoute('home')}>
//                     <div className='logo-container-home'>
//                         <div className='logo-content-home'>
//                             <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
//                         </div>
//                         <div className='logo-content-hover'>
//                             <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
//                         </div>
//                     </div>
//                 </Link>

                {/* <button className='button-menu-home' onClick={toggleMenu}>
                    {isMenuOpen ? t('close') : t('menu')}
                </button> */}
//                 <button
//                     ref={buttonRef}
//                     className='button-menu-home'
//                     onClick={toggleMenu}
//                     style={{ width: buttonWidth }}
//                 >
//                     <span ref={textRef} className='button-text'>
//                         {isMenuOpen ? t('close') : t('menu')}
//                     </span>
//                 </button>

//                 {isMenuOpen && (
//                     <NavHome
//                         t={t}
//                         getRoute={getRoute}
//                         changeLanguage={changeLanguage}
//                         language={language}
//                         availableLanguages={availableLanguages}
//                         onClose={toggleMenu}
//                         isClosing={isClosing}
//                         className={isClosing ? 'closing' : ''}
//                     />
//                 )}
//             </div>
//         </>
//     )
// }

// export default HeaderHome;


import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import NavHome from './NavHome';
import './HeaderHome.css';

function HeaderHome() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [buttonWidth, setButtonWidth] = useState('auto');
    const [displayText, setDisplayText] = useState(t('menu'));
    const [textOpacity, setTextOpacity] = useState(1);
    const buttonRef = useRef(null);
    const measureRef = useRef(null);

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsClosing(false);
            }, 600);
        } else {
            setIsMenuOpen(true);
        }
    };

    useEffect(() => {
        if (buttonRef.current && measureRef.current) {
            // Capturar ancho actual del botón
            const currentWidth = buttonRef.current.offsetWidth;
            
            // Ocultar texto visible
            setTextOpacity(0);
            
            // Medir el nuevo texto
            const newText = isMenuOpen ? t('close') : t('menu');
            measureRef.current.textContent = newText;
            
            // Obtener el ancho del contenedor de medición (que incluye padding del botón)
            const newTextWidth = measureRef.current.offsetWidth;
            const computedStyle = window.getComputedStyle(buttonRef.current);
            const paddingLeft = parseFloat(computedStyle.paddingLeft);
            const paddingRight = parseFloat(computedStyle.paddingRight);
            const newWidth = newTextWidth + paddingLeft + paddingRight;
            
            // Establecer ancho actual sin transición
            buttonRef.current.style.transition = 'none';
            setButtonWidth(`${currentWidth}px`);
            
            // Forzar reflow
            buttonRef.current.offsetHeight;
            
            // Reactivar transición y expandir
            requestAnimationFrame(() => {
                buttonRef.current.style.transition = 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                setButtonWidth(`${newWidth}px`);
                
                // Cambiar texto visible después de iniciar expansión
                setTimeout(() => {
                    setDisplayText(newText);
                    setTextOpacity(1);
                }, 200);
            });
        }
    }, [isMenuOpen, t]);

    return (
        <>
            {isMenuOpen && (
                <div className={`menu-overlay ${isClosing ? 'closing' : ''}`}></div>
            )}

            <div className='header-home-content'>
                <Link to={getRoute('home')}>
                    <div className='logo-container-home'>
                        <div className='logo-content-home'>
                            <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
                        </div>
                        <div className='logo-content-hover'>
                            <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
                        </div>
                    </div>
                </Link>

                <button 
                    ref={buttonRef} 
                    className='button-menu-home' 
                    onClick={toggleMenu}
                    style={{ width: buttonWidth }}
                >
                    <span className='button-text' style={{ opacity: textOpacity }}>
                        {displayText}
                    </span>
                </button>

                {/* Elemento invisible para medir */}
                <span ref={measureRef} className='button-text-measure'></span>

                {isMenuOpen && (
                    <NavHome
                        t={t}
                        getRoute={getRoute}
                        changeLanguage={changeLanguage}
                        language={language}
                        availableLanguages={availableLanguages}
                        onClose={toggleMenu}
                        isClosing={isClosing}
                        className={isClosing ? 'closing' : ''}
                    />
                )}
            </div>
        </>
    )
}

export default HeaderHome;