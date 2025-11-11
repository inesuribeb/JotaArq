import { useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { mapProjects } from '../../utils/MapProjects';
import { locationCoords } from '../../utils/LocationCoords';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// Fix para los iconos de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Función para crear iconos personalizados por color
const createCustomIcon = (color) => {
    const svgIcon = `
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" 
                    fill="${color}" 
                    stroke="#fff" 
                    stroke-width="2"/>
        </svg>
    `;

    return L.divIcon({
        html: svgIcon,
        className: 'custom-marker',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        popupAnchor: [0, -10],
    });
};

function Map() {
    const [showOverlay, setShowOverlay] = useState(false);

    // Mapear proyectos con coordenadas (se ejecuta una sola vez)
    const projectsWithCoords = useMemo(() => {
        return mapProjects
            .map(project => ({
                ...project,
                coords: locationCoords[project.location]
            }))
            .filter(project => project.coords);
    }, []);

    return (
        <section
            className='projects-map'
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
        >
            {/* {showOverlay && (
                <div className='map-overlay'>
                    <p>Mantén pulsada la tecla ⌘ mientras te desplazas</p>
                </div>
            )} */}

            <MapContainer
                center={[43.2630126, -2.9349852]}
                zoom={8}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%', background: 'var(--background-color)' }}
            >
                {/* <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                /> */}

                {/* <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                /> */}

                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* <MapContainer
                center={[43.2630126, -2.9349852]}
                zoom={8}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%', background: 'var(--background-color)' }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                /> */}

                {projectsWithCoords.map((project) => (
                    <Marker
                        key={project.id}
                        position={[project.coords.lat, project.coords.lng]}
                        icon={createCustomIcon(project.color)}
                    >
                        <Popup>
                            <div className='popup'>
                                {/* <h4>{project.location}</h4> */}
                                <p>{project.type.es}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </section>
    );
}

export default Map;