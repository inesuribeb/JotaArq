import Texts from '../Texts/Texts';
import './ServicesLayout2.css';

function ServicesLayout({ bgImage, image, title, subtitle, text, reverse, t }) {

    return (
        <section
            className='services-layout'
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className={`services-content ${reverse ? 'reverse' : ''}`}>
                <div className='services-image'>
                    <img src={image} alt={title} />
                    {/* <h1>{title}</h1> */}
                </div>

                <div className='services-text'>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    {/* <p>{text}</p> */}
                    <Texts className='services-text-desc' text={text} />

                </div>
            </div>
        </section>
    )
}

export default ServicesLayout;