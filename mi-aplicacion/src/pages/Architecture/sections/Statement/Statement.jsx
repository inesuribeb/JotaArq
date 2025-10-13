import MiniTitle from '../../../../components/Titles/MiniTitle';
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
                    <h1 dangerouslySetInnerHTML={{ __html: t('archStatement') }}></h1>

                </div>
            </div>
        </section>
    )
}

export default Statement;