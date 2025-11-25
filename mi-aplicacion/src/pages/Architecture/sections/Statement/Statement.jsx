import MiniTitle from '../../../../components/Titles/MiniTitle';
import IntroTitle from '../../../../components/Titles/IntroTitle';
import './Statement.css';

function Statement({ t }) {
    return (
        <section className='arch-statement'>
            <div className='first-line'>
                <div className='fl-left'>
                    <div className='fl-left-content'>
                        <MiniTitle text={t('services')} />

                    </div>
                </div>

                <div className='fl-right'>
                    {/* <h1 dangerouslySetInnerHTML={{ __html: t('archStatement') }}></h1> */}
                    {/* <IntroTitle
                        title={t('archStatement')}
                    /> */}
                    <IntroTitle
                        title={t('archStatement', 'architecture')}
                    />
                </div>
            </div>
        </section>
    )
}

export default Statement;