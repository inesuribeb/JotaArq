import './LanguageButtonPhone.css';

function LanguageButtonPhone({ changeLanguage, language, availableLanguages }) {
    return (
        <div className='language-phone-container'>
            {availableLanguages.map((lang) => (
                <button
                    key={lang}
                    className={`language-phone-button ${lang === language ? 'language-phone-active' : ''}`}
                    onClick={() => changeLanguage(lang)}
                >
                    {lang.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

export default LanguageButtonPhone;