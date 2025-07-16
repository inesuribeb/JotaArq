import { useState } from 'react';
import './LanguageButton.css'

const LanguageButton = ({ changeLanguage, language, availableLanguages }) => {
    const [showAllLanguages, setShowAllLanguages] = useState(false);
    
    return (
        <div
            className='header-language'
            onMouseEnter={() => setShowAllLanguages(true)}
            onMouseLeave={() => setShowAllLanguages(false)}
        >
            {/* Botón activo siempre visible */}
            <button
                className='active language-main'
                data-text={language.toUpperCase()}
                onClick={() => changeLanguage(language)}
            >
                {language.toUpperCase()}
            </button>

            {/* Dropdown con los otros idiomas */}
            {showAllLanguages && (
                <div className='language-dropdown'>
                    {availableLanguages
                        .filter(lang => lang !== language)
                        .map(lang => (
                            <button
                                key={lang}
                                data-text={lang.toUpperCase()}
                                onClick={() => changeLanguage(lang)}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))
                    }
                </div>
            )}
        </div>
    );
}

export default LanguageButton;