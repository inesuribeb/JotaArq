import './MainTitle.css';

function MainTitle({ title, subtitle, className }) {
    return (
        <div className={`main-title-container ${className || ''}`}>
            <h1 className="main-title-heading">{title}</h1>
            {subtitle && <h2 className="main-subtitle">{subtitle}</h2>}
        </div>
    )
}

export default MainTitle;