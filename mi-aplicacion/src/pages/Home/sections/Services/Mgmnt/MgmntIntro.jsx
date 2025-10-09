import IntroLayout from '../components/IntroLayout';
import './MngmntIntro.css';

function MgmntIntro({ t }) {
    return (
        <div>
            <IntroLayout
                t={t}
                titleKey="two"
                subtitleKey="management"
                textKey="mngIntro"
                buttonTextKey="management"
                buttonRoute="/services"
                imageSrc="/path/to/image.jpg"
                imageAlt="Descripción de la imagen"
            />
        </div>
    );
}

export default MgmntIntro;