import { Outlet } from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";
// import Navigation from '../components/Navigation/Navigation';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Root () {
    return (
        <LanguageProvider>
          <div className="app">
            {/* <Navigation /> */}
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