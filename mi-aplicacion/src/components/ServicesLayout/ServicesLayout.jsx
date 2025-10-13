import './ServicesLayout.css';

function ServicesLayout({ bgImage, image, title, subtitle, text, t }) { // Añade las llaves aquí

    return (
        <section
            className='services-layout'
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className='services-content'>
                <div className='services-image'>
                    <img src={image} alt={title} />
                </div>
                
                <div className='services-text'>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <p>{text}</p>
                </div>
                {/* <div className='services-image'>
                    <img src={image} alt={title} />
                </div> */}
            </div>
        </section>
    )

}

export default ServicesLayout;