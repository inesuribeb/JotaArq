// import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
// import './UrbanDesign.css';

// function UrbanDesignPhone({ t }) {
//     return (
//         <ServicesLayoutPhone
//             bgImage="/Images/Architecture/services/1.png"
//             image="/Images/Architecture/services/2.png"
//             title={t('diseñoUrbano')}
//             subtitle={t('urbanDesignSubtitle')}
//             text={t('urbanDesignText')}
//             t={t}
//         />
//     )
// }

// export default UrbanDesignPhone;

import ServicesLayoutPhone from '../../../../../../components/ServicesLayout/ServicesLayoutPhone';
import './EdificationPhone.css';

function EdificationPhone({ t }) {
    return (
        <ServicesLayoutPhone
            bgImage="/Images/Architecture/Randstand.png"
            image="/Images/Architecture/Randstand.png"
            title={t('edificacion')}
            subtitle={t('edificationSubtitle')}
            text={t('edificationText')}
            t={t}
            reverse={true} 
        />
    )
}

export default EdificationPhone;