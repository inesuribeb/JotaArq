import MiniTitle from '../../../../components/Titles/MiniTitle';
import ArqIntro from './Arq/ArqIntro';
import MgmntIntro from './Mgmnt/MgmntIntro';
import './ServicesIntro.css';

function ServicesIntro({ t }) {
    return (
        <section className='section-services-intro'>
            <MiniTitle text={t('services')} />

            <ArqIntro
                t={t}
            />
            <MgmntIntro
                t={t}
            />
        </section>
    );
}

export default ServicesIntro;