import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Navigation = () => {
  const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();

  return (
    <nav>
      <Link to={getRoute('home')}>{t('home')}</Link>
      <Link to={getRoute('architecture')}>{t('architecture')}</Link>
      <Link to={getRoute('management')}>{t('management')}</Link>
      <Link to={getRoute('aboutUs')}>{t('aboutUs')}</Link>
      <Link to={getRoute('contact')}>{t('contact')}</Link>
      
      <div>
        {availableLanguages.map(lang => (
          <button 
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={language === lang ? 'active' : ''}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;