import IntroLayout2 from '../components/IntroLayout2';
import './ArqIntro.css';

function ArqIntro({ t }) {
    return (
        <div>
            <IntroLayout2
                t={t}
                titleKey="one"
                subtitleKey="architecture"
                textKey="arqIntro"
                buttonTextKey="knowMore"
                buttonRoute="/services"
                imageSrc="/Images/Home/MANTILLA 2.png"
                imageAlt="Descripción de la imagen"
                variant="architecture"
                buttonColor="primary"
            />
        </div>
    );
}

export default ArqIntro;