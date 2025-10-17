import './Worker.css';

function Worker({ t , workerName, workerRole }) {
    return (
        <section className='worker-section'>
            <h1>{t('ourExperts')}</h1>
            <h2 className='worker-name'>{workerName}</h2>
            <p className='worker-role'>{workerRole}</p>
        </section>
    );
}

export default Worker;