import { Outlet } from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";
import Navigation from '../components/Navigation/Navigation';

function Root () {
    return (
        <LanguageProvider>
          <div className="app">
            <Navigation />
            <main>
              <Outlet />
            </main>
          </div>
        </LanguageProvider>
      );
}

export default Root;