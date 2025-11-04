import './IntroTitle.css';

function IntroTitle({ title, className = '' }) {
    return (
        <div>
            <h1 
                className={`section-intro-title ${className}`}
                dangerouslySetInnerHTML={{ __html: title }}
            />
        </div>
    );
}

export default IntroTitle;