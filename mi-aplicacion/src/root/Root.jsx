import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";
import { HeaderProvider } from "../contexts/HeaderContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Root () {
  const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    // return (
    //     <LanguageProvider>
    //       <div className="app">
    //         <Header />
    //         <main>
    //           <Outlet />
    //         </main>
    //         <Footer />
    //       </div>
    //     </LanguageProvider>
    //   );

    return (
      <LanguageProvider>
          <HeaderProvider> {/* ← AÑADIR ESTA LÍNEA */}
              <div className="app">
                  <Header />
                  <main>
                      <Outlet />
                  </main>
                  <Footer />
              </div>
          </HeaderProvider> {/* ← Y ESTA LÍNEA */}
      </LanguageProvider>
  );
}

export default Root;