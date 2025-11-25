// import { useState, useEffect } from 'react';
// import './Portada.css'

// const Portada = ({ t }) => {
//     const [showH1, setShowH1] = useState(false);
//     const [fadeOut, setFadeOut] = useState(false);

//     useEffect(() => {
//         const h1Timer = setTimeout(() => {
//             setShowH1(true);
//         }, 3000);

//         const fadeTimer = setTimeout(() => {
//             setFadeOut(true);
//         }, 6000);

//         return () => {
//             clearTimeout(h1Timer);
//             clearTimeout(fadeTimer);
//         };
//     }, []);

//     return (
//         <div className="portada-content">
//             <video 
//                 autoPlay 
//                 muted 
//                 loop 
//                 playsInline
//                 preload="auto"
//                 className="video-background"
//             >
//                 <source src="/Videos/videoOrdenador.mp4" type="video/mp4" />
//                 Tu navegador no soporta videos HTML5.
//             </video>

//             <img 
//                 src="/Logos/logoPng.png" 
//                 alt="Logo JOTA" 
//                 className={`portada-logo ${fadeOut ? 'fade-out' : ''}`}
//             />

//             <h1 
//                 dangerouslySetInnerHTML={{ __html: t('homeIntro22') }} 
//                 className={`${showH1 ? 'show' : ''} ${fadeOut ? 'fade-out' : ''}`}
//             />
//         </div>
//     )
// };

// export default Portada;


import { useState, useEffect } from 'react';
import './Portada.css'

const Portada = ({ t, loading }) => { // ← AÑADIDO loading
    const [showH1, setShowH1] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const h1Timer = setTimeout(() => {
            setShowH1(true);
        }, 3000);

        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 6000);

        return () => {
            clearTimeout(h1Timer);
            clearTimeout(fadeTimer);
        };
    }, []);

    return (
        <div className="portada-content">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="video-background"
            >
                <source src="/Videos/videoOrdenador.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video>

            <img
                src="/Logos/logoPng.png"
                alt="Logo JOTA"
                className={`portada-logo ${fadeOut ? 'fade-out' : ''}`}
            />

            {/* ============================================ */}
            {/* MODIFICADO: Ahora usa contenido de Strapi */}
            {/* ============================================ */}
            <h1
                dangerouslySetInnerHTML={{
                    __html: t('homeIntro22', 'home')  // ← Sin el loading, usa fallback directamente
                }}
                className={`${showH1 ? 'show' : ''} ${fadeOut ? 'fade-out' : ''}`}
            />
        </div>
    )
};

export default Portada;