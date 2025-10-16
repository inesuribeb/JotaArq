import { useLanguage } from '../../contexts/LanguageContext';
import useIsMobile from '../../hooks/useMobile';
import MainTitle from '../../components/Titles/MainTitle';
import Pictures from '../Architecture/sections/Pictures/Pictures';
import PictureS from './sections/Picture/PictureS';
import StatementM from './sections/Statement/StatementM';
import StatementMphone from './sections/Statement/StatementMphone';
import MngServices from './sections/MngServices/MngServices';
import MngServicesPhone from './sections/MngServices/MngServicesPhone';
import './Management.css'

function Management() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const isMobile = useIsMobile(768);

    return (
        <div className="management-content">
            <MainTitle
                title={t('serviciosDe')}
                subtitle={t('deGestion')}
                className="custom-class"
            />

            {/* <PictureS /> */}
            <Pictures />

            {isMobile ? <StatementMphone t={t} /> : <StatementM t={t} />}

            {isMobile ? <MngServicesPhone t={t} /> : <MngServices t={t} />}

        </div>
    )
}

export default Management; 