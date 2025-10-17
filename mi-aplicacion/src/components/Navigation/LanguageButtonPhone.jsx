import './LanguageButtonPhone.css';

function LanguageButtonPhone({ changeLanguage, language, availableLanguages, onClose }) {

    const handleLanguageChange = (lang) => {
        changeLanguage(lang);
        if (onClose) {
            onClose(); // Cerrar el menú después de cambiar idioma
        }
    };

    return (
        <div className='language-phone-container'>
            {availableLanguages.map((lang) => (
                <button
                    key={lang}
                    className={`language-phone-button ${lang === language ? 'language-phone-active' : ''}`}
                    // onClick={() => changeLanguage(lang)}
                    onClick={() => handleLanguageChange(lang)}

                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

export default LanguageButtonPhone;