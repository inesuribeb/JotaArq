import './MiniTitle.css'

function MiniTitle({ text }) {
    return (
        <h3 className='mini-title'>
            <span dangerouslySetInnerHTML={{ __html: text }}></span>
            <span></span>
        </h3>
    );
}

export default MiniTitle;