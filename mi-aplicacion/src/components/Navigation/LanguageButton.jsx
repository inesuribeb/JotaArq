import { useState } from 'react';
import ButtonJota from '../Button/ButtonJota';
import './LanguageButton.css'

const LanguageButton = ({ changeLanguage, language, availableLanguages }) => {
    const [showAllLanguages, setShowAllLanguages] = useState(false);
    
    return (
        <div
            className='header-language'
            onMouseEnter={() => setShowAllLanguages(true)}
            onMouseLeave={() => setShowAllLanguages(false)}
        >
            <ButtonJota
                variant="primary"
                className="language-main"
                onClick={() => changeLanguage(language)}
            >
                {language.toUpperCase()}
            </ButtonJota>

            {showAllLanguages && (
                <div className='language-dropdown'>
                    {availableLanguages
                        .filter(lang => lang !== language)
                        .map(lang => (
                            <ButtonJota
                                key={lang}
                                variant="secondary"
                                onClick={() => changeLanguage(lang)}
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