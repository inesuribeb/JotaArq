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
                    {/* <h1 className='first-title3' dangerouslySetInnerHTML={{ __html: t('aboutUsText') }}></h1> */}
                    <h1 className='first-title3' dangerouslySetInnerHTML={{ __html: t('aboutUsText', 'aboutUs') }}></h1>

                    {/* <Texts className='aboutUsText2' text={t('whoWeAre')} /> */}
                    <Texts className='aboutUsText2' text={t('whoWeAre', 'aboutUs')} />
                </div>
            </div>

        </section>
    )
}

export default StatementUs;