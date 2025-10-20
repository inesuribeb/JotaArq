// import { useEffect, useRef } from 'react';
// import Texts from '../Texts/Texts';
// import './ServicesLayoutPhone.css';

// function ServicesLayoutPhone({ bgImage, title, subtitle, text, t }) {

//     const bgRef = useRef(null);


//     return (
//         <section className='services-layout-phone'  >

//                 <div className='services-text-phone'>
//                     <h3>{title}</h3>
//                     <h4>{subtitle}</h4>
//                     <Texts className='services-text-desc-phone' text={text} />

//                 </div>

//                 <div className='services-image-phone'>
//                     <img src={bgImage} alt="" />
//                 </div>
//         </section>
//     )
// }

// export default ServicesLayoutPhone;
import { useEffect, useRef } from 'react';
import Texts from '../Texts/Texts';
import './ServicesLayoutPhone.css';

function ServicesLayoutPhone({ bgImage, title, subtitle, text, dark, t }) {

    const bgRef = useRef(null);

    return (
        <section className={`services-layout-phone ${dark ? 'dark' : ''}`}>

            <div className='services-text-phone'>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <Texts className='services-text-desc-phone' text={text} />
            </div>

            <div className='services-image-phone'>
                <img src={bgImage} alt="" />
            </div>
        </section>
    )
}

export default ServicesLayoutPhone;