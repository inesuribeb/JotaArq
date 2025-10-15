import { useLanguage } from '../../../../contexts/LanguageContext';
import MiniTitle from '../../../../components/Titles/MiniTitle';
import Texts from '../../../../components/Texts/Texts';
import ButtonGeneral from '../../../../components/Button/ButtonGeneral';
import './ContactPhone.css';

function ContactPhone({ t }) {
    const { getRoute } = useLanguage();

    const contactButtons = [
        { id: 1, type: "contactWithUs", style: "primary", route: getRoute('contact') }, // Usa getRoute
        { id: 2, type: "Instagram", style: "minimal", route: "https://www.instagram.com/jota.arquitectura_/" },
        { id: 3, type: "Linkedin", style: "minimal", route: "https://www.linkedin.com/company/jotaarq/" },
        { id: 4, type: "Email", style: "minimal", route: "mailto:info@yourcompany.com" },
    ];

    return (
        <section className='contact-phone'>
            <MiniTitle text={t('contact')} />
            <h1 className='first-title-phone' dangerouslySetInnerHTML={{ __html: t('contactUs') }}></h1>


            <div className='img-contact-phone'>
                {/* <img src="/Images/Management/services/masgestion4.webp" alt="" /> */}
                <img src="/Images/Home/oficinas.jpg" alt="" />
            </div>

            <div className='second-line-contact-phone'>
                {contactButtons.map((item, index) => (
                    <div
                        key={item.id}
                        className={index === 0 ? 'button-container-large-phone' : 'button-container-small-phone'}
                    >
                        <ButtonGeneral
                            color={item.style}
                            text={t(item.type)}
                            route={item.route}
                            className='contact-button'
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ContactPhone;