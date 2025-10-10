import MiniTitle from '../../../../components/Titles/MiniTitle';
import ArqIntro from './Arq/ArqIntro';
import MgmntIntro from './Mgmnt/MgmntIntro';
import './ServicesIntro.css';

function ServicesIntro({ t }) {
    return (
        <section className='section-services-intro'>
            <MiniTitle className='mini-title-services' text={t('services')} />
            <div className='container-services'>
                <ArqIntro
                    t={t}
                />
                <div className='black-connector'></div> 
                <MgmntIntro
                    t={t}
                />
            </div>
        </section>
    );
}

export default ServicesIntro;