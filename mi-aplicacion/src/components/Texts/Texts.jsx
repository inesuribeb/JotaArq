import './Texts.css';

function Texts({ text }) {
    return <p className="text" dangerouslySetInnerHTML={{ __html: text }} />;
  }
  
export default Texts;