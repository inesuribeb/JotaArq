import CertificadosPhone from './components/Certificados/CertificadosPhone';
import AsesoramientoUrbPhone from './components/AsesoramientoUrb/AsesoramientoUrbPhone';
import TramLicenciasPhone from './components/TramLicencias/TramLicenciasPhone';
import DireccionObraPhone from './components/DireccionObra/DireccionObraPhone';
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
            {/* <h1>Under Construction</h1> */}

            <div className="mng-services-content-phone">
                    <section id="section-cerf-phone" className="service-section">
                        <CertificadosPhone t={t} />
                    </section>

                    <section id="section-asesoramiento-phone" className="service-section">
                        <AsesoramientoUrbPhone t={t} />
                    </section>

                    <section id="section-tramitation-phone" className="service-section">
                        <TramLicenciasPhone t={t} />
                    </section>

                    <section id="section-direction-phone" className="service-section">
                        <DireccionObraPhone t={t} />
                    </section>
                </div>

        </section>
    )
}

export default MngServicesPhone;