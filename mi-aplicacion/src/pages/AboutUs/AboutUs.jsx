import { useEffect } from 'react'; // ← AÑADIR
import { useLanguage } from '../../contexts/LanguageContext';
import Cover from './sections/Cover/Cover';
import StatementUs from './sections/StatementUs/StatementUs';
import Clients from './sections/Clients/Clients';
import './AboutUs.css'

function AboutUs() {
    const { t, getRoute, changeLanguage, language, availableLanguages, loadPageContent } = useLanguage(); // ← AÑADIR loadPageContent
    useEffect(() => {
        loadPageContent('aboutUs');
    }, [language]);

    return (
        <div className="aboutus-content">
            <Cover t={t} />
            <StatementUs t={t} />
            <Clients t={t} />
        </div>
    )
}

export default AboutUs; 