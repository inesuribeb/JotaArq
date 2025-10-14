import { useState } from 'react';
import MiniTitle from '../../../../components/Titles/MiniTitle';
import ButtonGeneral from '../../../../components/Button/ButtonGeneral';
import './Form.css';

function Form({ t }) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        empresa: '',
        mensaje: ''
    });
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log('Formulario enviado:', formData, aceptaTerminos);
    };

    return (
        <section className='contact-form'>
            <div className='first-line'>
                <div className='fl-left'>
                    <div className='fl-left-content'>
                        <MiniTitle text={t('services')} />
                    </div>
                </div>

                <div className='fl-center'></div>

                <div className='fl-right'>
                    <form onSubmit={handleSubmit} className="form-container">
                        <div className="form-group">
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                required
                                className="form-input"
                                placeholder=" "
                            />
                            <label className="form-label">
                                {t('name')} <span className="required-asterisk">*</span>
                            </label>
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="form-input"
                                placeholder=" "
                            />
                            <label className="form-label">
                                {t('email')} <span className="required-asterisk">*</span>
                            </label>
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="empresa"
                                value={formData.empresa}
                                onChange={handleInputChange}
                                required
                                className="form-input"
                                placeholder=" "
                            />
                            <label className="form-label">
                                {t('empresa')} <span className="required-asterisk">*</span>
                            </label>
                        </div>

                        <div className="form-group">
                            <textarea
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleInputChange}
                                required
                                className="form-input form-textarea"
                                rows="6"
                                placeholder=" "
                            />
                            <label className="form-label">
                                {t('mensaje')} <span className="required-asterisk">*</span>
                            </label>
                        </div>

                        <div className="form-checkbox">
                            <input
                                type="checkbox"
                                id="terminos"
                                checked={aceptaTerminos}
                                onChange={(e) => setAceptaTerminos(e.target.checked)}
                                required
                            />
                            <label htmlFor="terminos">
                                {t('terminos')}
                            </label>
                        </div>

                        {/* <div
                            onClick={handleSubmit}
                            className="form-button-wrapper"
                        >
                            <ButtonGeneral
                                color="secondary"
                                text={t('send')}
                                route="#"
                                className="form-submit-button"
                            />
                        </div> */}
                        <div className="form-button-wrapper">
                            <ButtonGeneral
                                type="submit"
                                color="secondary"
                                text={t('send')}
                                className="form-submit-button"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Form;