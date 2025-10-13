// import { useNavigate } from 'react-router-dom';
// import './ButtonGeneral.css';

// function ButtonGeneral({ color, text, route, className }) {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         if (route.startsWith('http://') || route.startsWith('https://')) {
//             window.open(route, '_blank', 'noopener,noreferrer');
//         } else if (route.startsWith('mailto:')) {
//             window.location.href = route;
//         } else {
//             navigate(route);
//         }
//     };

//     return (
//         <button
//             className={`button-general ${color} ${className || ''}`}
//             onClick={handleClick}
//         >
//             {text}
//             <img
//                 src="/Icons/FLECHA WEB-09.svg"
//                 alt="arrow"
//                 className="button-icon"
//             />
//         </button>
//     );
// }

// export default ButtonGeneral;

import { useNavigate } from 'react-router-dom';
import './ButtonGeneral.css';

function ButtonGeneral({ color, text, route, className, onClick }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
            return;
        }
        
        if (route.startsWith('http://') || route.startsWith('https://')) {
            window.open(route, '_blank', 'noopener,noreferrer');
        } else if (route.startsWith('mailto:')) {
            window.location.href = route;
        } else {
            navigate(route);
        }
    };

    return (
        <button
            className={`button-general ${color} ${className || ''}`}
            onClick={handleClick}
        >
            <span className="button-content">
                <span className="button-text">{text}</span>
                <img
                    src="/Icons/FLECHA WEB-09.svg"
                    alt="arrow"
                    className="button-icon"
                />
            </span>
            <span className="button-content-hover">
                <span className="button-text">{text}</span>
                <img
                    src="/Icons/FLECHA WEB-09.svg"
                    alt="arrow"
                    className="button-icon"
                />
            </span>
        </button>
    );
}

export default ButtonGeneral;