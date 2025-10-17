import MiniTitle from '../../../../components/Titles/MiniTitle';
import './StatementMphone.css';

function StatementMphone({ t }) {
    return (
        <div className='statementM-phone'>
                {/* <div className='fl-left'>
                    <div className='fl-left-content'>
                        <MiniTitle text={t('services')} />

                    </div>
                </div>

                <div className='fl-right'>
                    <h1 dangerouslySetInnerHTML={{ __html: t('archStatement') }}></h1>

                </div> */}

                <MiniTitle text={t('services')} />
                <h1 className='first-title-phone2' dangerouslySetInnerHTML={{ __html: t('mngStatement') }}></h1>
            </div>
    )
}

export default StatementMphone;