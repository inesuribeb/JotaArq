import IntroLayout from '../components/IntroLayout';
import './ArqIntro.css';

function ArqIntro({ t }) {
    return (
        <div>
            <IntroLayout
                t={t}
                titleKey="one"
                subtitleKey="architecture"
                textKey="arqIntro"
                buttonTextKey="architecture"
                buttonRoute="/services"
                imageSrc="/path/to/image.jpg"
                imageAlt="Descripción de la imagen"
            />
        </div>
    );
}

export default ArqIntro;