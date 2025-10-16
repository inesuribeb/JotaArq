import { useLanguage } from '../../contexts/LanguageContext';
import useIsMobile from '../../hooks/useMobile';
import MainTitle from '../../components/Titles/MainTitle';
import Pictures from './sections/Pictures/Pictures';
import PictureS from '../Management/sections/Picture/PictureS';
import './Architecture.css'
import Statement from './sections/Statement/Statement';
import StatementPhone from './sections/Statement/StatementPhone';
import ArqServices from './sections/ArqServices/ArqServices';
import ArqServicesPhone from './sections/ArqServices/ArqServicesPhone';

function Architecture() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const isMobile = useIsMobile(768);

    return (
        <div className="architecture-content">
            <MainTitle
                title={t('serviciosDeArq')}
                subtitles={[
                    t('sloganArq1'),
                    t('sloganArq2'),
                    t('sloganArq3'),
                ]}
                className="custom-class"
            />

            {/* <Pictures /> */}
            <PictureS />

            {isMobile ? <StatementPhone t={t} /> : <Statement t={t} />}

            {/* <ArqServices
                t={t}
            /> */}

            {isMobile ? <ArqServicesPhone t={t} /> : <ArqServices t={t} />}

        </div>
    )
}

export default Architecture; 