import './MiniTitle.css'

function MiniTitle({ text, className }) {
    return (
        <h3 
        // className='mini-title'
        className={`mini-title ${className || ''}`} 
        >
            <span dangerouslySetInnerHTML={{ __html: text }}></span>
            <span></span>
        </h3>
    );
}

export default MiniTitle;