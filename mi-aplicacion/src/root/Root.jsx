import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Root () {
  const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return (
        <LanguageProvider>
          <div className="app">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      );
}

export default Root;