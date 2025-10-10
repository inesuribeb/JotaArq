// import { useNavigate } from 'react-router-dom';
// import './ButtonGeneral.css';

// function ButtonGeneral({ color, text, route, className }) {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate(route);
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

function ButtonGeneral({ color, text, route, className }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Verificar si es un enlace externo o mailto
        if (route.startsWith('http://') || route.startsWith('https://')) {
            // Abrir en nueva pestaña
            window.open(route, '_blank', 'noopener,noreferrer');
        } else if (route.startsWith('mailto:')) {
            // Abrir cliente de correo
            window.location.href = route;
        } else {
            // Navegación interna con React Router
            navigate(route);
        }
    };

    return (
        <button
            className={`button-general ${color} ${className || ''}`}
            onClick={handleClick}
        >
            {text}
            <img
                src="/Icons/FLECHA WEB-09.svg"
                alt="arrow"
                className="button-icon"
            />
        </button>
    );
}

export default ButtonGeneral;