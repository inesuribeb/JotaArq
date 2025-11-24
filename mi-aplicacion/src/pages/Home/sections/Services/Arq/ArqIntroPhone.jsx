import { useLanguage } from '../../../../../contexts/LanguageContext';
import IntroLayoutPhone from '../components/IntroLayoutPhone';
import './ArqIntroPhone.css';

function ArqIntroPhone({ t }) {
    const { getRoute } = useLanguage();

    return (
        <div>
            <IntroLayoutPhone
                t={t}
                titleKey="one"
                subtitleKey="architecture"
                textKey="arqIntro"
                buttonTextKey="knowMore"
                buttonRoute={getRoute('architecture')} 
                // imageSrc="/Images/Home/Parke.png"
                imageSrc="/Images/Home/movilArq.jpg"
                imageAlt="Descripción de la imagen"
                // variant="architecture"
                buttonColor="primary"
            />
        </div>
    );
}

export default ArqIntroPhone;