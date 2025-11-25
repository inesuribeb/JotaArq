import MiniTitle from '../../../../components/Titles/MiniTitle';
import IntroTitle from '../../../../components/Titles/IntroTitle';
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
                    {/* <IntroTitle
                        title={t('mngStatement')}
                    /> */}
                    <IntroTitle
                        title={t('mngStatement', 'management')}
                    />
                </div>
            </div>


        </section>
    )
}

export default StatementM;