import MiniTitle from '../../../../components/Titles/MiniTitle';
import Texts from '../../../../components/Texts/Texts';
import ButtonGeneral from '../../../../components/Button/ButtonGeneral';
import './Contact.css';

function Contact({ t }) {

    // const contactButtons = [
    //     { id: 1, type: "contactWithUs", style: "primary" },
    //     { id: 2, type: "Instagram", style: "minimal"  },
    //     { id: 3, type: "Linkedin", style: "minimal"  },
    //     { id: 4, type: "Email", style: "minimal"  },
    // ];
    const contactButtons = [
        { id: 1, type: "contactWithUs", style: "primary", route: "/contact" },
        { id: 2, type: "Instagram", style: "minimal", route: "https://www.instagram.com/jota.arquitectura_/" },
        { id: 3, type: "Linkedin", style: "minimal", route: "https://linkedin.com/company/yourcompany" },
        { id: 4, type: "Email", style: "minimal", route: "mailto:info@yourcompany.com" },
    ];

    return (
        <section className='home-contact'>
            <div className='img-contact'>
                <img src="/Images/Home/prueba.png" alt="" />
            </div>

            <div className='contact-refs'>
                <div className='first-line'>
                    <div className='fl-left'>
                        <div className='fl-left-content'>
                            <MiniTitle text={t('contact')} />

                        </div>
                    </div>

                    <div className='fl-right'>
                        <h1 dangerouslySetInnerHTML={{ __html: t('contactUs') }}></h1>

                    </div>
                </div>

            </div>

            {/* <div className='second-line-contact'>
                {contactButtons.map(item => (
                    <ButtonGeneral 
                        key={item.id}
                        color={item.style}
                        text={t(item.type)}
                        route={item.route}
                        className='contact-button'
                    />
                ))}
            </div> */}

            <div className='second-line-contact'>
                {contactButtons.map((item, index) => (
                    <div
                        key={item.id}
                        className={index === 0 ? 'button-container-large' : 'button-container-small'}
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

export default Contact;