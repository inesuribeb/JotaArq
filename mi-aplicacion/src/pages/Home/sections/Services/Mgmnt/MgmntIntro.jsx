import IntroLayout2 from '../components/IntroLayout2';
import './MngmntIntro.css';

function MgmntIntro({ t }) {
    return (
        <div className="mgmnt-intro-wrapper">
            <IntroLayout2
                t={t}
                titleKey="two"
                subtitleKey="management"
                textKey="mngIntro"
                buttonTextKey="knowMore"
                buttonRoute="/services"
                imageSrc="/Images/Home/Parke.png"
                imageAlt="Descripción de la imagen"
                reverse={true}  
                variant="management"
            />
        </div>
    );
}

export default MgmntIntro;