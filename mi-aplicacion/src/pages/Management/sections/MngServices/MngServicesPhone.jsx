import CertificadosPhone from './components/1.Certificados/CertificadosPhone';
import AsesoramientoUrbPhone from './components/2.AsesoramientoUrb/AsesoramientoUrbPhone';
import TramLicenciasPhone from './components/3.TramLicencias/TramLicenciasPhone';
import DireccionObraPhone from './components/4.DireccionObra/DireccionObraPhone';
import TabMenuPhone from "../../../../components/TabMenu/TabMenuPhone";
import './MngServicesPhone.css';

function MngServicesPhone({ t }) {

    const servicesPhone = [
        { id: 1, nameKey: 'projectManagement', sectionId: 'section-cerf' },
        { id: 2, nameKey: 'projectMonitoring', sectionId: 'section-asesoramiento' },
        { id: 3, nameKey: 'propertyManagement', sectionId: 'section-tramitation' },
        { id: 4, nameKey: 'costManagement', sectionId: 'section-direction' },
        { id: 5, nameKey: 'tddTechnical', sectionId: 'section-tdd' }

    ];


    return(
        <section className='MngServicesPhone-container'>
            <TabMenuPhone servicesPhone={servicesPhone} t={t} />

            <div className="mng-services-content-phone">
                    <section id="section-cerf-phone" className="service-section-phone">
                        <CertificadosPhone t={t} />
                    </section>

                    <section id="section-asesoramiento-phone" className="service-section-phone">
                        <AsesoramientoUrbPhone t={t} />
                    </section>

                    <section id="section-tramitation-phone" className="service-section-phone">
                        <TramLicenciasPhone t={t} />
                    </section>

                    <section id="section-direction-phone" className="service-section-phone">
                        <DireccionObraPhone t={t} />
                    </section>
                </div>

        </section>
    )
}

export default MngServicesPhone;