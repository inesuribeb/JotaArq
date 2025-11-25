// import './PortadaPhone.css';

// function PortadaPhone({ t }) {
//     return (
//         <section className='portadaPhone'>
//             <video 
//                 autoPlay 
//                 muted 
//                 loop 
//                 playsInline
//                 preload="auto"
//                 className="video-background-phone"
//             >
//                 <source src="/Videos/JOTA_LANDING.mp4" type="video/mp4" />
//                 Tu navegador no soporta videos HTML5.
//             </video>

//             <img 
//                 src="/Logos/logoPng.png" 
//                 alt="Logo JOTA" 
//                 className="portadaPhone-logo"
//             />

//             <h1 
//                 dangerouslySetInnerHTML={{ __html: t('homeIntro22') }}
//             />

//         </section>
//     )
// }

// export default PortadaPhone;



import { useState, useEffect } from 'react';
import './PortadaPhone.css';

function PortadaPhone({ t }) {
    const [showH1, setShowH1] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // H1 aparece después de 3s
        const h1Timer = setTimeout(() => {
            setShowH1(true);
        }, 3000);

        // Ambos empiezan fadeout a los 6s
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 6000);

        return () => {
            clearTimeout(h1Timer);
            clearTimeout(fadeTimer);
        };
    }, []);

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
                <source src="/Videos/videoMovil.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video>

            <img 
                src="/Logos/logoPng.png" 
                alt="Logo JOTA" 
                className={`portadaPhone-logo ${fadeOut ? 'fade-out' : ''}`}
            />

            <h1 
                dangerouslySetInnerHTML={{ __html: t('homeIntro22') }}
                className={`${showH1 ? 'show' : ''} ${fadeOut ? 'fade-out' : ''}`}
            />
        </section>
    )
}

export default PortadaPhone;