import { useLanguage } from '../../../../../contexts/LanguageContext';
import IntroLayoutPhone from '../components/IntroLayoutPhone';
import './MngmntIntroPhone.css';

function MngmntIntroPhone({ t }) {
    const { getRoute } = useLanguage();

    return (
        <div className="mgmnt-intro-wrapper">
            <IntroLayoutPhone
                t={t}
                titleKey="two"
                subtitleKey="management"
                textKey="mngIntro"
                buttonTextKey="knowMore"
                buttonRoute={getRoute('management')} 
                imageSrc="/Images/Home/Parke.png"
                imageAlt="Descripción de la imagen"
                // reverse={true}  
                // variant="management"
            />
        </div>
    )
}

export default MngmntIntroPhone;