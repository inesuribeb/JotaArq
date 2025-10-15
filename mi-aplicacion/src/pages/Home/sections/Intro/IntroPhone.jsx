import MiniTitle from '../../../../components/Titles/MiniTitle';
import Texts from '../../../../components/Texts/Texts';
import './IntroPhone.css';

function IntroPhone({ t }) {

    const datos = [
        { id: 1, type: "viviendas", qty: 34 },
        { id: 2, type: "diseñoUrbano", qty: 1 },
        { id: 3, type: "terciarios", qty: 28 },
        { id: 4, type: "eficienciaEnergetica", qty: 70 },
        { id: 5, type: "accesibilidad", qty: 26 },
        { id: 6, type: "projectMonitoring", qty: 26 },
    ];


    return (
        <section className='intro-phone-container'>
            <MiniTitle text={t('usPhone')} />
            <h1 className='first-title-phone' dangerouslySetInnerHTML={{ __html: t('introText') }}></h1>
            <p className='mini-intro-phone'>
                <span>105 +</span>
                <span>{t('projects')}</span>
            </p>
            {/* <Texts text={t('miniIntro')} /> */}

            <div className='intro-image-container'>
                <img src="/Images/Home/spain 1.png" alt="" />
            </div>
            <Texts className='lorem-ipsum' text={t('miniIntro')} />

            <div className='second-line-phone'>
                {datos.map(item => (
                    <div key={item.id} className='sl-item-phone'>
                        <p className='type-phone'>{t(item.type)}</p>
                        <p className='qty-phone'>{item.qty}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default IntroPhone;