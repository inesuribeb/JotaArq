import CertificadosPhone from './components/Certificados/CertificadosPhone';
import AsesoramientoUrbPhone from './components/AsesoramientoUrb/AsesoramientoUrbPhone';
import TramLicenciasPhone from './components/TramLicencias/TramLicenciasPhone';
import DireccionObraPhone from './components/DireccionObra/DireccionObraPhone';
import TabMenuPhone from "../../../../components/TabMenu/TabMenuPhone";
import './MngServicesPhone.css';

function MngServicesPhone({ t }) {

    const servicesPhone = [
        { id: 1, nameKey: 'certificados', sectionId: 'section-cerf-phone' },
        { id: 2, nameKey: 'asesoramientoUrbanistico', sectionId: 'section-asesoramiento-phone' },
        { id: 3, nameKey: 'tramitacionLicencias', sectionId: 'section-tramitation-phone' },
        { id: 4, nameKey: 'direccionObra', sectionId: 'section-direction-phone' }
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