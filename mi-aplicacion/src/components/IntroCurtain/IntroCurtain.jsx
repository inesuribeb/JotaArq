// import { useState, useEffect } from 'react';
// import './IntroCurtain.css';

// function IntroCurtain() {
//     const [showFavicon, setShowFavicon] = useState(true);
//     const [showJota, setShowJota] = useState(false);

//     useEffect(() => {
//         const faviconTimer = setTimeout(() => {
//             setShowFavicon(false);
            
//             setTimeout(() => {
//                 setShowJota(true);
//             }, 300); 
            
//         }, 1500);

//         return () => clearTimeout(faviconTimer);
//     }, []);

//     return (
//         <section className='curtain-section'>
//             <img 
//                 src="/Logos/faviconCalidad.png" 
//                 alt="" 
//                 className={`favicon-logo ${showFavicon ? 'show rotating' : 'hide'}`}
//             />
//             <img 
//                 src="/Logos/JotaWhite.png" 
//                 alt="" 
//                 className={`jota-logo ${showJota ? 'show' : 'hide'}`}
//             />
//         </section>
//     )
// }

// export default IntroCurtain;


import './IntroCurtain.css';

function IntroCurtain() {
    return (
        <section className='curtain-section'>
            <img 
                src="/Logos/logoPng.png" 
                alt="" 
                className="jota-logo"
            />
        </section>
    )
}

export default IntroCurtain;