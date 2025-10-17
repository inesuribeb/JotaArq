import MainTitle from '../../../../components/Titles/MainTitle';
import Texts from '../../../../components/Texts/Texts';
import './Cover.css';

function Cover({ t }) {
    return (
        <section className='cover-aboutUs'>
            <MainTitle
                title="jota"
                subtitle={t('historiaVision')}
                className="aboutUs-class"
            />
            <div className='bg-aboutUs'>
                <div className='col-aboutUs'>
                    {/* <Texts className='aboutUsText' text={t('aboutUsText')} /> */}

                </div>
                <div className='col-aboutUs'>
                    <img src="/Images/AboutUs/Rectangle 13.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Cover;