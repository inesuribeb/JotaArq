// import { useEffect, useRef, useState } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import { LanguageProvider, useLanguage } from "../contexts/LanguageContext";
// import { HeaderProvider } from "../contexts/HeaderContext";
// import useIsMobile from "../hooks/useMobile";
// import Header from "../components/Header/Header";
// import HeaderHome from "../components/Header/HeaderHome/HeaderHome";
// import HeaderPhone from "../components/Header/HeaderPhone";
// import Footer from "../components/Footer/Footer";
// import IntroCurtain from "../components/IntroCurtain/IntroCurtain";
// import './Root.css';

// function RootContent() {
//   const location = useLocation();
//   const mainRef = useRef(null);
//   const isMobile = useIsMobile(768);
//   const { getRoute } = useLanguage();
//   const [showSplash, setShowSplash] = useState(true);
//   const [splashAnimating, setSplashAnimating] = useState(false);

//   const homeRoute = getRoute('home');
//   const isHomePage = location.pathname === homeRoute || location.pathname === '/';

//   useEffect(() => {
//     sessionStorage.removeItem('hasSeenSplash');

//     const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

//     if (hasSeenSplash) {
//       setShowSplash(false);
//       return;
//     }

//     const timer = setTimeout(() => {
//       setSplashAnimating(true);

//       setTimeout(() => {
//         setShowSplash(false);
//         sessionStorage.setItem('hasSeenSplash', 'true');
//       }, 500);

//     }, 2000); 

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   useEffect(() => {
//     const footerHeight = window.innerHeight * 0.4;
//     document.body.style.paddingBottom = `${footerHeight}px`;

//     const handleScroll = () => {
//       if (!mainRef.current) return;

//       const mainElement = mainRef.current;
//       const mainRect = mainElement.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const mainBottom = mainRect.bottom;

//       if (mainBottom <= windowHeight) {
//         const offset = windowHeight - mainBottom;
//         const clampedOffset = Math.max(0, Math.min(offset, footerHeight));
//         mainElement.style.transform = `translateY(-${clampedOffset}px)`;
//       } else {
//         mainElement.style.transform = 'translateY(0)';
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.body.style.paddingBottom = '0';
//     };
//   }, [location.pathname]);

//   if (showSplash) {
//     return (
//       <div className={`splash-wrapper ${splashAnimating ? 'fade-out' : ''}`}>
//         <IntroCurtain />
//       </div>
//     );
//   }

//   return (
//     <div className="app">
//       {isHomePage && !isMobile ? (
//         <HeaderHome />
//       ) : (
//         isMobile ? <HeaderPhone /> : <Header />
//       )}

//       <main ref={mainRef} className="main-content">
//         <Outlet />
//       </main>
//       <div className="footer-container-root">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// function Root() {
//   return (
//     <LanguageProvider>
//       <HeaderProvider>
//         <RootContent />
//       </HeaderProvider>
//     </LanguageProvider>
//   );
// }

// export default Root;

import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "../contexts/LanguageContext";
import { HeaderProvider } from "../contexts/HeaderContext";
import useIsMobile from "../hooks/useMobile";
import Header from "../components/Header/Header";
import HeaderHome from "../components/Header/HeaderHome/HeaderHome";
import HeaderPhone from "../components/Header/HeaderPhone";
import Footer from "../components/Footer/Footer";
import IntroCurtain from "../components/IntroCurtain/IntroCurtain";
import './Root.css';

function RootContent() {
  const location = useLocation();
  const mainRef = useRef(null);
  const isMobile = useIsMobile(768);
  const { getRoute } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);
  const [splashAnimating, setSplashAnimating] = useState(false);

  const homeRoute = getRoute('home');
  const isHomePage = location.pathname === homeRoute || location.pathname === '/';

  // Manejo de la splash screen
  useEffect(() => {
    // Limpiar sessionStorage para que aparezca siempre (útil para desarrollo)
    sessionStorage.removeItem('hasSeenSplash');

    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (hasSeenSplash) {
      setShowSplash(false);
      return;
    }

    // Esperar 2 segundos y luego animar salida
    const timer = setTimeout(() => {
      setSplashAnimating(true);

      // Después de la animación, ocultar completamente
      setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }, 500); // Duración de la animación de salida

    }, 2000); // Tiempo que se muestra la splash

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const footerHeight = window.innerHeight * 0.4;
    document.body.style.paddingBottom = `${footerHeight}px`;

    const handleScroll = () => {
      if (!mainRef.current) return;

      const mainElement = mainRef.current;
      const mainRect = mainElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const mainBottom = mainRect.bottom;

      if (mainBottom <= windowHeight) {
        const offset = windowHeight - mainBottom;
        const clampedOffset = Math.max(0, Math.min(offset, footerHeight));
        mainElement.style.transform = `translateY(-${clampedOffset}px)`;
      } else {
        mainElement.style.transform = 'translateY(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.paddingBottom = '0';
    };
  }, [location.pathname]);

  return (
    <>
      {/* Contenido principal - siempre renderizado */}
      <div className="app">
        {isHomePage && !isMobile ? (
          <HeaderHome />
        ) : (
          isMobile ? <HeaderPhone /> : <Header />
        )}

        <main ref={mainRef} className="main-content">
          <Outlet />
        </main>
        <div className="footer-container-root">
          <Footer />
        </div>
      </div>

      {/* Splash screen - por encima durante la animación */}
      {showSplash && (
        <div className={`splash-wrapper ${splashAnimating ? 'fade-out' : ''}`}>
          <IntroCurtain />
        </div>
      )}
    </>
  );
}

function Root() {
  return (
    <LanguageProvider>
      <HeaderProvider>
        <RootContent />
      </HeaderProvider>
    </LanguageProvider>
  );
}

export default Root;