import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const translations = {
  es: {
    home: "Inicio",
    architecture: "Arquitectura",
    management: "Gestión",
    aboutUs: "Sobre Nosotros",
    contact: "Contacto",
  },
  eu: {
    home: "Hasiera",
    architecture: "Arkitektura",
    management: "Kudeaketa",
    aboutUs: "Guri Buruz",
    contact: "Kontaktua",
  },
  en: {
    home: "Home",
    architecture: "Architecture",
    management: "Management",
    aboutUs: "About Us",
    contact: "Contact",
  }
};

const routes = {
  es: {
    home: "/inicio",
    architecture: "/arquitectura",
    management: "/gestion",
    aboutUs: "/sobre-nosotros",
    contact: "/contacto"
  },
  eu: {
    home: "/hasiera",
    architecture: "/arkitektura",
    management: "/kudeaketa",
    aboutUs: "/guri-buruz",
    contact: "/kontaktua"
  },
  en: {
    home: "/home",
    architecture: "/architecture",
    management: "/management",
    aboutUs: "/about-us",
    contact: "/contact"
  }
};

const routeMap = {
  // Español
  "/inicio": { es: "/inicio", eu: "/hasiera", en: "/home" },
  "/arquitectura": { es: "/arquitectura", eu: "/arkitektura", en: "/architecture" },
  "/gestion": { es: "/gestion", eu: "/kudeaketa", en: "/management" },
  "/sobre-nosotros": { es: "/sobre-nosotros", eu: "/guri-buruz", en: "/about-us" },
  "/contacto": { es: "/contacto", eu: "/kontaktua", en: "/contact" },

  // Euskera
  "/hasiera": { es: "/inicio", eu: "/hasiera", en: "/home" },
  "/arkitektura": { es: "/arquitectura", eu: "/arkitektura", en: "/architecture" },
  "/kudeaketa": { es: "/gestion", eu: "/kudeaketa", en: "/management" },
  "/guri-buruz": { es: "/sobre-nosotros", eu: "/guri-buruz", en: "/about-us" },
  "/kontaktua": { es: "/contacto", eu: "/kontaktua", en: "/contact" },

  // Inglés
  "/home": { es: "/inicio", eu: "/hasiera", en: "/home" },
  "/architecture": { es: "/arquitectura", eu: "/arkitektura", en: "/architecture" },
  "/management": { es: "/gestion", eu: "/kudeaketa", en: "/management" },
  "/about-us": { es: "/sobre-nosotros", eu: "/guri-buruz", en: "/about-us" },
  "/contact": { es: "/contacto", eu: "/kontaktua", en: "/contact" }
};

const detectLanguageFromPath = (path) => {
  const firstSegment = '/' + path.split('/')[1];

  for (const [lang, langRoutes] of Object.entries(routes)) {
    if (Object.values(langRoutes).includes(firstSegment)) {
      return lang;
    }
  }

  return 'es';
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [language, setLanguage] = useState(() => {
    return detectLanguageFromPath(location.pathname);
  });

  const changeLanguage = (newLanguage) => {
    const currentPath = location.pathname;
    const segments = currentPath.split('/');
    const basePath = segments.length > 1 ? `/${segments[1]}` : '/inicio';
    const params = segments.slice(2).join('/');

    let newPath = routeMap[basePath]?.[newLanguage] || routes[newLanguage].home;

    const redirectPath = params ? `${newPath}/${params}` : newPath;

    navigate(redirectPath);

    setLanguage(newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const getRoute = (routeName, params = {}) => {
    const baseRoute = routes[language][routeName];

    if (!baseRoute) {
      console.warn(`No existe la ruta '${routeName}' para el idioma '${language}'`);
      return routes[language].home;
    }

    if (params.id !== undefined) {
      return `${baseRoute}/${params.id}`;
    }

    return baseRoute;
  };

  useEffect(() => {
    const detectedLanguage = detectLanguageFromPath(location.pathname);
    if (detectedLanguage !== language) {
      setLanguage(detectedLanguage);
    }
  }, [location.pathname, language]);

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage,
      t,
      getRoute,
      routes,
      availableLanguages: ['es', 'eu', 'en']
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;