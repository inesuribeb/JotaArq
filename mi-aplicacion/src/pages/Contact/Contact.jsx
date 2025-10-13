import { useLanguage } from '../../contexts/LanguageContext';
import MainTitle from '../../components/Titles/MainTitle';
import PictureC from './sections/PictureC/PictureC';
import Form from './sections/Form/Form';
import './Contact.css'

function Contact() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    return (
        <div className="contact-content">
            <MainTitle
                title="jota"
                subtitle={t('creemosJuntos')}
                className="custom-class"
            />

            <PictureC />

            <Form
                t={t}
            />
        </div>
    )
}

export default Contact; 