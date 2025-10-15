import MiniTitle from '../../../../components/Titles/MiniTitle';
import './StatementPhone.css';

function StatementPhone({ t }) {
    return (
        <div className='statement-phone'>
                {/* <div className='fl-left'>
                    <div className='fl-left-content'>
                        <MiniTitle text={t('services')} />

                    </div>
                </div>

                <div className='fl-right'>
                    <h1 dangerouslySetInnerHTML={{ __html: t('archStatement') }}></h1>

                </div> */}

                <MiniTitle text={t('contact')} />
                <h1 className='first-title-phone' dangerouslySetInnerHTML={{ __html: t('archStatement') }}></h1>
            </div>
    )
}

export default StatementPhone;