import { useNavigate } from 'react-router-dom';
// import { ReactComponent as ArrowIcon } from "../../../public/Icons/FLECHA WEB-05.svg"
import './ButtonGeneral.css';

function ButtonGeneral({ color, text, route, className }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <button
            className={`button-general ${color} ${className || ''}`}
            onClick={handleClick}
        >
            {text}
            {/* <ArrowIcon className="button-icon" /> */}
            <img
                src="/Icons/FLECHA WEB-09.svg"
                alt="arrow"
                className="button-icon"
            />
        </button>
    );
}

export default ButtonGeneral;