// import { useEffect } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import { LanguageProvider } from "../contexts/LanguageContext";
// import { HeaderProvider } from "../contexts/HeaderContext";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

// function Root () {
//   const location = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location.pathname]);

//     return (
//       <LanguageProvider>
//           <HeaderProvider> 
//               <div className="app">
//                   <Header />
//                   <main>
//                       <Outlet />
//                   </main>
//                   <Footer />
//               </div>
//           </HeaderProvider> 
//       </LanguageProvider>
//   );
// }

// export default Root;






// import { useEffect, useRef } from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import { LanguageProvider } from "../contexts/LanguageContext";
// import { HeaderProvider } from "../contexts/HeaderContext";
// import useIsMobile from "../hooks/useMobile";
// import Header from "../components/Header/Header";
// import HeaderHome from "../components/Header/HeaderHome/HeaderHome";
// import HeaderPhone from "../components/Header/HeaderPhone";
// import Footer from "../components/Footer/Footer";
// import './Root.css';

// function Root () {
//   const location = useLocation();
//   const mainRef = useRef(null);
//   const isMobile = useIsMobile(768); 


//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);


// useEffect(() => {
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


//   return (
//     <LanguageProvider>
//       <HeaderProvider> 
//         <div className="app">
//           {isMobile ? <HeaderPhone /> : <Header />}
//           <main ref={mainRef} className="main-content">
//             <Outlet />
//           </main>
//           <Footer />
//         </div>
//       </HeaderProvider> 
//     </LanguageProvider>
//   );
// }

// export default Root;


import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "../contexts/LanguageContext";
import { HeaderProvider } from "../contexts/HeaderContext";
import useIsMobile from "../hooks/useMobile";
import Header from "../components/Header/Header";
import HeaderHome from "../components/Header/HeaderHome/HeaderHome";
import HeaderPhone from "../components/Header/HeaderPhone";
import Footer from "../components/Footer/Footer";
import './Root.css';

// Componente interno para acceder al contexto de idioma
function RootContent() {
  const location = useLocation();
  const mainRef = useRef(null);
  const isMobile = useIsMobile(768);
  const { getRoute } = useLanguage();

  // Verificar si estamos en la ruta Home
  const homeRoute = getRoute('home');
  const isHomePage = location.pathname === homeRoute || location.pathname === '/';

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
    <div className="app">
      {/* Renderiza HeaderHome si estamos en Home, sino el header normal */}
      {isHomePage && !isMobile ? (
        <HeaderHome />
      ) : (
        isMobile ? <HeaderPhone /> : <Header />
      )}

      <main ref={mainRef} className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
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