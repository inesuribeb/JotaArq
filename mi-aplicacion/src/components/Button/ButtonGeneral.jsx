import { useNavigate } from 'react-router-dom';
import './ButtonGeneral.css';

function ButtonGeneral({ color, text, route }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <button
            className={`button-general ${color}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}

export default ButtonGeneral;