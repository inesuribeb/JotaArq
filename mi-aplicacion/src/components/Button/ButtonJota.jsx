import './ButtonJota.css'

function ButtonJota({ 
    children, 
    onClick, 
    className = '', 
    variant = 'primary',
    ...props 
}) {
    return (
        <button
            className={`button-jota ${variant} ${className}`}
            data-text={children}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default ButtonJota;