import { useLanguage } from '../../../../../contexts/LanguageContext';
import IntroLayout2 from '../components/IntroLayout2';
import JetasLayout from '../Jetas/JetasLayout';
import './ArqIntro.css';

function ArqIntro({ t }) {
    const { getRoute } = useLanguage();

    return (
        <div>
            <IntroLayout2
                t={t}
                titleKey="one"
                subtitleKey="architecture"
                textKey="arqIntro"
                buttonTextKey="knowMore"
                buttonRoute={getRoute('architecture')} 
                imageSrc="/Images/Home/Parke.png"
                imageAlt="Descripción de la imagen"
                variant="architecture"
                buttonColor="primary"
            />
            {/* <JetasLayout
                t={t}
                titleKey="one"
                subtitleKey="architecture"
                textKey="arqIntro"
                buttonTextKey="knowMore"
                buttonRoute={getRoute('architecture')} 
                imageSrc="/Images/Home/Parke.png"
                imageAlt="Descripción de la imagen"
                variant="architecture"
                buttonColor="primary"
                reverse={true}  
                darkVariant={true} 
                page="home" 
            /> */}
        </div>
    );
}

export default ArqIntro;