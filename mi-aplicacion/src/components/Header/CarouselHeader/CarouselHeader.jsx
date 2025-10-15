import './CarouselHeader.css';

function CarouselHeader() {
    const ImagesCarousel = [
        { id: 1, image: '/Images/Home/cancha.jpg' },
        { id: 2, image: '/Images/Home/obra1.jpg' },
        { id: 3, image: '/Images/Home/obra2.jpg' },
        { id: 4, image: '/Images/Home/obra3.jpg' },
        { id: 5, image: '/Images/Home/tren.jpg' }
    ];

    return (
        <div className='carousel-header-container'>
            <div className='carousel-track'>
                {/* Primera copia de las imágenes */}
                {ImagesCarousel.map((item, index) => (
                    <div key={`first-${index}`} className='carousel-item'>
                        <img src={item.image} alt={`Imagen ${item.id}`} />
                    </div>
                ))}
                {/* Segunda copia para el loop infinito */}
                {ImagesCarousel.map((item, index) => (
                    <div key={`second-${index}`} className='carousel-item'>
                        <img src={item.image} alt={`Imagen ${item.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselHeader;