import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

function Footer() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();

    return (
        <section className='footer-container'>
            <h1>Footer</h1>
            <div className='footer-f1'>
                <div className='col'>
                    <h1>{t('oficina')}</h1>
                    <p>C/ GRAN VIA 53, 5 Izq.</p>
                    <p></p>
                </div>
                <div className='col'>
                    <h1>{t('contacto')}</h1>
                </div>
                <div className='col'>
                    <h1>{t('rrss')}</h1>
                </div>
                <div className='col'>
                    {/* <h1>Footer</h1> */}
                </div>
                <div className='col'>
                    <h1>{t('menu')}</h1>
                </div>

            </div>

            <div className='footer-f2'>

            </div>
        </section>
    )
}

export default Footer;