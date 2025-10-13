import { useLanguage } from '../../contexts/LanguageContext';
import MainTitle from '../../components/Titles/MainTitle';
import Cover from './sections/Cover/Cover';
import StatementUs from './sections/StatementUs/StatementUs';
import './AboutUs.css'

function AboutUs() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="aboutus-content">
            {/* <MainTitle
                title="jota"
                subtitle={t('historiaVision')}
                className="custom-class"
            /> */}

            <Cover
                t={t}
            />

            <StatementUs
                t={t}
            />
        </div>
    )
}

export default AboutUs; 