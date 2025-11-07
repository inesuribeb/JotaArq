// import './Portada.css'

// const Portada = ({ t }) => {
// return (
//     <div className="portada-content">
//             <h1 dangerouslySetInnerHTML={{ __html: t('homeIntro') }}></h1>
//         </div>
// )
// };

// export default Portada;

import './Portada.css'

const Portada = ({ t }) => {
    return (
        <div className="portada-content">
            {/* <video autoplay muted loop playsInline className="video-background">
                <source src="/Videos/JOTA_LANDING.mp4" type="video/mp4" />
            </video> */}
            <video 
                autoPlay 
                muted 
                loop 
                playsInline
                preload="auto"
                className="video-background"
            >
                <source src="/Videos/JOTA_LANDING.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5.
            </video>
            {/* <h1 dangerouslySetInnerHTML={{ __html: t('homeIntro') }}></h1> */}
        </div>
    )
};

export default Portada;