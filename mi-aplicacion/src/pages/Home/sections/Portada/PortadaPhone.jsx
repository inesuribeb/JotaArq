import './PortadaPhone.css';

function PortadaPhone({ t }) {
    return (
        <section className='portadaPhone'>
            <video 
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
                className="video-background-phone"
            >
                <source src="/Videos/JOTA_LANDING.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video>
            {/* <div className='one-portada'>
                <div className='one-one'>

                </div>
                <div className='one-one'>
                    <h1 dangerouslySetInnerHTML={{ __html: t('homeIntroPhone') }}></h1>
                </div>
            </div>
            <div className='two-portada'>
                <h2>Jota</h2>
            </div> */}
        </section>
    )
}

export default PortadaPhone;