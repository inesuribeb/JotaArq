import { useLanguage } from '../../../../../contexts/LanguageContext';
import IntroLayout2 from '../components/IntroLayout2';
import './MngmntIntro.css';

function MgmntIntro({ t }) {
    const { getRoute } = useLanguage();

    return (
        <div className="mgmnt-intro-wrapper">
            <IntroLayout2
                t={t}
                titleKey="two"
                subtitleKey="management"
                textKey="mngIntro"
                buttonTextKey="knowMore"
                buttonRoute={getRoute('management')} 
                imageSrc="/Images/Home/Parke.png"
                imageAlt="Descripción de la imagen"
                reverse={true}  
                variant="management"
            />
        </div>
    );
}

export default MgmntIntro;