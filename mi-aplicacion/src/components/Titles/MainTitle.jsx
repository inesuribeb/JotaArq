// import './MainTitle.css';

// function MainTitle({ title, subtitle, className }) {
//     return (
//         <div className={`main-title-container ${className || ''}`}>
//             <h1 className="main-title-heading">{title}</h1>
//             {subtitle && <h2 className="main-subtitle">{subtitle}</h2>}
//         </div>
//     )
// }

// export default MainTitle;

import { useState, useEffect } from 'react';
import './MainTitle.css';

function MainTitle({ title, subtitle, subtitles, className }) {
    const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    // Determinar si usar un solo subtítulo o múltiples
    const subtitleArray = subtitles || (subtitle ? [subtitle] : []);
    const hasMultipleSubtitles = subtitleArray.length > 1;
    
    useEffect(() => {
        if (!hasMultipleSubtitles) return;
        
        const interval = setInterval(() => {
            setIsAnimating(true);
            
            setTimeout(() => {
                setCurrentSubtitleIndex((prevIndex) => 
                    (prevIndex + 1) % subtitleArray.length
                );
                setIsAnimating(false);
            }, 500); // Duración de la animación de salida
            
        }, 2000); // Cambiar cada 3 segundos
        
        return () => clearInterval(interval);
    }, [hasMultipleSubtitles, subtitleArray.length]);
    
    const currentSubtitle = subtitleArray[currentSubtitleIndex];
    
    return (
        <div className={`main-title-container ${className || ''}`}>
            <h1 className="main-title-heading">{title}</h1>
            {currentSubtitle && (
                <h2 className={`main-subtitle ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                    {currentSubtitle}
                </h2>
            )}
        </div>
    );
}

export default MainTitle;