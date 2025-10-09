import './Portada.css'

const Portada = ({ t }) => {
return (
    <div className="portada-content">
            <h1 dangerouslySetInnerHTML={{ __html: t('homeIntro') }}></h1>
        </div>
)
};

export default Portada;