import Texts from '../../../../components/Texts/Texts';
import './StatementUs.css';

function StatementUs({ t }) {
    return (
        <section className='statement-about-us'>
            <div className='col-statement-1'>
                <h1>hola</h1>
                <h1>hola</h1>
            </div>

            <div className='col-statement-2'>
            <Texts className='aboutUsText' text={t('whoWeAre')} />

            </div>

        </section>
    )
}

export default StatementUs;