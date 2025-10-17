import Texts from '../../../../components/Texts/Texts';
import MiniTitle from '../../../../components/Titles/MiniTitle';
import './StatementUs.css';

function StatementUs({ t }) {
    return (
        <section className='statement-about-us'>
            <div className='col-statement-1'>
                <img src="/Images/AboutUs/materiales.jpg" alt="" />
            </div>

            <div className='col-statement-2'>
                <div className='rw1'>
                </div>
                <div className='rw2'>
                    <h1 className='first-title3' dangerouslySetInnerHTML={{ __html: t('whoWeAre') }}></h1>
                    <Texts className='aboutUsText2' text={t('aboutUsText')} />

                </div>
            </div>

        </section>
    )
}

export default StatementUs;