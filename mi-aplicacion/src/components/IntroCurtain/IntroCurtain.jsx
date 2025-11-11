// import './IntroCurtain.css';

// function IntroCurtain() {
//     return (
//         <section className='curtain-section'>
//             <img src="/Logos/JotaWhite.png" alt="" />
//         </section>
//     )
// }

// export default IntroCurtain;


import { useState, useEffect } from 'react';
import './IntroCurtain.css';

function IntroCurtain() {
    const [showFavicon, setShowFavicon] = useState(true);
    const [showJota, setShowJota] = useState(false);

    useEffect(() => {
        // Después de 1.5s, ocultar favicon
        const faviconTimer = setTimeout(() => {
            setShowFavicon(false);
            
            // Esperar un poco antes de mostrar JotaWhite
            setTimeout(() => {
                setShowJota(true);
            }, 300); // Pequeña pausa entre logos
            
        }, 1500);

        return () => clearTimeout(faviconTimer);
    }, []);

    return (
        <section className='curtain-section'>
            <img 
                src="/Logos/faviconCalidad.png" 
                alt="" 
                className={`favicon-logo ${showFavicon ? 'show rotating' : 'hide'}`}
            />
            <img 
                src="/Logos/JotaWhite.png" 
                alt="" 
                className={`jota-logo ${showJota ? 'show' : 'hide'}`}
            />
        </section>
    )
}

export default IntroCurtain;