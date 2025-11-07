import MiniTitle from '../../../../components/Titles/MiniTitle';
import Texts from '../../../../components/Texts/Texts';
import IntroTitle from '../../../../components/Titles/IntroTitle';
import './Intro.css';

function Intro({ t }) {

    const datos = [
        { id: 1, type: "diseñoUrbano", qty: 1 },
        { id: 2, type: "terciarios", qty: 28 },
        { id: 3, type: "viviendas", qty: 34 },
        { id: 4, type: "eficienciaEnergetica", qty: 70 },
        // { id: 5, type: "accesibilidad", qty: 26 },
        { id: 5, type: "projectMonitoring", qty: 26 },
    ];

    return (
        <section className='intro-section'>
            <div className='first-line'>
                <div className='fl-left'>
                    <div className='fl-left-content'>
                        <MiniTitle text={t('us')} />
                        <p className='mini-intro'>
                            <span>105 +</span>
                            <span>{t('projects')}</span>
                        </p>
                        <Texts text={t('miniIntro')} />
                    </div>
                </div>

                <div className='fl-right'>
                    {/* <h1 className='first-title' dangerouslySetInnerHTML={{ __html: t('introText') }}></h1> */}
                    <IntroTitle
                        title={t('introText')}
                        className="first-title"
                    />
                    <img src="/Images/Home/spain 1.png" alt="" />
                </div>
            </div>

            <div className='second-line'>
                {datos.map(item => (
                    <div key={item.id} className='sl-item'>
                        <p className='type'>{t(item.type)}</p>
                        <p className='qty'>{item.qty}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Intro;