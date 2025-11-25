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
            // bgImage="/Images/Architecture/Randstand.png"
            bgImage={[
                "/Images/Architecture/services/corporative/01.jpg",
                "/Images/Architecture/services/corporative/02.jpg",
                "/Images/Architecture/services/corporative/03.jpg",
                "/Images/Architecture/services/corporative/04.JPG",
                "/Images/Architecture/services/corporative/05.jpg",
                "/Images/Architecture/services/corporative/06.jpg",
                "/Images/Architecture/services/corporative/07.jpg",
                "/Images/Architecture/services/corporative/08.JPG",
            ]}
            image="/Images/Architecture/Randstand.png"
            title={t('edificacion')}
            // subtitle={t('edificationSubtitle')}
            // text={t('edificationText')}
            subtitle={t('edificationSubtitle', 'architecture')} // ← CAMBIO
            text={t('edificationText', 'architecture')}
            t={t}
            reverse={true}
        // dark={true}
        />
    )
}

export default EdificationPhone;