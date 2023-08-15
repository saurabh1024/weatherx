import { TileLayer, Marker, Popup, MapContainer, Pane, LayersControl} from "react-leaflet"
import { API_KEY } from "../utils/constants";

const MapComponent = ({lat=19, lon=73, layers}) => {
    const styleMap = {
        height: '70vh',
    }
    return (
        <div id="map">
            <MapContainer trackResize className="rounded border-2 h-10" center={[lat,lon]} zoom={3} style={styleMap} scrollWheelZoom={false}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <LayersControl position="topright"> 
                <LayersControl.Overlay checked name="Temperature">
                    <Pane style={{ zIndex: 0 }}>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={`https://tile.openweathermap.org/map/${layers[0]}/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        />
                    </Pane>
                </LayersControl.Overlay>
    
                <LayersControl.Overlay name="Precipitation">
                    <Pane style={{ zIndex: 0 }}>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={`https://tile.openweathermap.org/map/${layers[1]}/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        />
                    </Pane>
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Wind">
                    <Pane style={{ zIndex: 0 }}>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={`https://tile.openweathermap.org/map/${layers[2]}/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        />
                    </Pane>
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Clouds">
                    <Pane style={{ zIndex: 0 }}>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={`https://tile.openweathermap.org/map/${layers[3]}/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        />
                    </Pane>
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Pressure">
                    <Pane style={{ zIndex: 0 }}>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={`https://tile.openweathermap.org/map/${layers[4]}/{z}/{x}/{y}.png?appid=${API_KEY}`}
                        />
                    </Pane>
                </LayersControl.Overlay>
            </LayersControl>
                 
            <Marker position={[lat,lon]}>
                <Popup>
                You are here. <br /> Looks nice.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
        
    );
}

export default MapComponent;
