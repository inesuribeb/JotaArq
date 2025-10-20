import UrbanDesignPhone from "./components/UrbanDesign/UrbanDesignPhone";
import EdificationPhone from "./components/Edification/EdificationPhone";
import LicensesPhone from "./components/Licenses/LicensesPhone";
import SostenibilityPhone from "./components/Sostenibility/SostenibilityPhone";
import './ArqServicesPhone.css';

function ArqServicesPhone({ t }) {

    const servicesPhone = [
        { id: 1, nameKey: 'diseñoUrbano', sectionId: 'section-urbanDesign-phone' },
        { id: 2, nameKey: 'edificacion', sectionId: 'section-edification-phone' },
        { id: 3, nameKey: 'tramitacionLicencias', sectionId: 'section-tramitation-phone' },
        { id: 4, nameKey: 'sostenibilidad', sectionId: 'section-sostenibility-phone' }
    ];

    return (
        <section className='arqservicesPhone-container'>
            {/* <h1>Under Construction</h1> */}
            <div className="arq-services-content-phone">
                <section id="section-urbanDesign-phone" className="service-section">
                    <UrbanDesignPhone t={t} />
                </section>

                <section id="section-edification-phone" className="service-section">
                    <EdificationPhone t={t} />
                </section>

                <section id="section-tramitation-phone" className="service-section">
                    <LicensesPhone t={t} />
                </section>

                <section id="section-sostenibility-phone" className="service-section">
                    <SostenibilityPhone t={t} />
                </section>
            </div>
        </section>
    )
}

export default ArqServicesPhone;