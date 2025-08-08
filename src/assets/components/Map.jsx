import mapImg from '../images/map-image.png';
import './Map.css';

function Map() {

    return (
        <div className="map-container">
            <div className="map-info">
                <p>604-336-7773</p>
                <p>info@simpleclinic.ca</p>
                <p>3933 Rupert St, Vancouver, BC, V5R 2G7</p>
            </div>
            <a href="https://maps.app.goo.gl/NB6rxWDvs98M9nT19"  className="map-link" target='_blank'>
                <img src={mapImg} alt="" />
            </a>
        </div>
    );
}

export default Map;