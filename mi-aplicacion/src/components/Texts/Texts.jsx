import './Texts.css';

function Texts({ text, className }) {
    return (
        <p 
            className={`text ${className || ''}`} 
            dangerouslySetInnerHTML={{ __html: text }} 
        />
    );
}

export default Texts;