import MiniTitle from '../../../../components/Titles/MiniTitle';
import './StatementPhone.css';

function StatementPhone({ t }) {
    return (
        <div className='statement-phone'>
                <MiniTitle text={t('services')} />
                <h1 className='first-title-phone2' dangerouslySetInnerHTML={{ __html: t('archStatement') }}></h1>
            </div>
    )
}

export default StatementPhone;