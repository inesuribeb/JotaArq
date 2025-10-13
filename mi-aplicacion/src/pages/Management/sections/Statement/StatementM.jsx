import MiniTitle from '../../../../components/Titles/MiniTitle';
import './StatementM.css';

function StatementM({ t }) {
    return (
        <section className='mng-StatementM'>
            <div className='first-line'>
                <div className='fl-left'>
                    <div className='fl-left-content'>
                        <MiniTitle text={t('services')} />

                    </div>
                </div>

                <div className='fl-right'>
                    <h1 dangerouslySetInnerHTML={{ __html: t('mngStatement') }}></h1>

                </div>
            </div>


        </section>
    )
}

export default StatementM;