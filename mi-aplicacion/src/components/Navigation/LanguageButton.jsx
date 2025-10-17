import { useState } from 'react';
import ButtonJota from '../Button/ButtonJota';
import './LanguageButton.css'

const LanguageButton = ({ changeLanguage, language, availableLanguages }) => {
    const [showAllLanguages, setShowAllLanguages] = useState(false);
    
    const handleLanguageChange = (lang) => {
        changeLanguage(lang);
        setShowAllLanguages(false);
    };
    
    return (
        <div
            className='header-language'
            onMouseEnter={() => setShowAllLanguages(true)}
            onMouseLeave={() => setShowAllLanguages(false)}
        >
            <ButtonJota
                variant="primary"
                className={`language-main ${showAllLanguages ? 'active' : ''}`}
                onClick={() => handleLanguageChange(language)}
            >
                {language.toUpperCase()}
            </ButtonJota>

            {showAllLanguages && (
                <div className='language-dropdown'>
                    {availableLanguages
                        .filter(lang => lang !== language)
                        .map((lang, index) => (
                            <ButtonJota
                                key={lang}
                                variant="secondary"
                                onClick={() => handleLanguageChange(lang)}
                                className={`language-item language-item-${index + 1}`}
                            >
                                {lang.toUpperCase()}
                            </ButtonJota>
                        ))
                    }
                </div>
            )}
        </div>
    );
}

export default LanguageButton;