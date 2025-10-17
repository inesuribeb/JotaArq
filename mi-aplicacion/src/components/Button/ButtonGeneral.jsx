import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IoChevronForward } from 'react-icons/io5';
import { HiChevronRight } from 'react-icons/hi2';
import './ButtonGeneral.css';

function ButtonGeneral({ color, text, route, className, onClick, type = "button" }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick();
            return;
        }

        if (!route) return;

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
            type={type}
            className={`button-general ${color} ${className || ''}`}
            onClick={handleClick}
        >
            {/* <span className="button-content">
                <span className="button-text">{text}</span>
                <img
                    src="/Icons/FLECHA WEB-09.svg"
                    alt="arrow"
                    className="button-icon"
                />
            </span> */}
            {/* <span className="button-content-hover">
                <span className="button-text">{text}</span>
                <img
                    src="/Icons/FLECHA WEB-09.svg"
                    alt="arrow"
                    className="button-icon"
                />
            </span> */}

            <span className="button-content">
                <span className="button-text">{text}</span>
                {/* <ArrowForwardIosIcon className="button-icon button-icon-mui" /> */}
                <HiChevronRight className="button-icon button-icon-mui" strokeWidth="20" />
            </span>

            <span className="button-content-hover">
                <span className="button-text">{text}</span>
                {/* <ArrowForwardIosIcon className="button-icon button-icon-mui" /> */}
                <HiChevronRight className="button-icon button-icon-mui" strokeWidth="20" />
            </span>
        </button>
    );
}

export default ButtonGeneral;