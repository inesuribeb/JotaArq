import MiniTitle from '../../../../components/Titles/MiniTitle';
import ArqIntroPhone from './Arq/ArqIntroPhone';
import MngmntIntroPhone from './Mgmnt/MngmntIntroPhone';
import './ServicesIntroPhone.css';

function ServicesIntroPhone({ t }) {
    return (
        <section className='services-intro-phone-container'>
            <MiniTitle className='mini-title-services' text={t('services')} />
            <div className='container-services-phone'>
                <ArqIntroPhone
                    t={t}
                />

                <MngmntIntroPhone
                    t={t}
                />
            </div>
        </section>
    )
}

export default ServicesIntroPhone;