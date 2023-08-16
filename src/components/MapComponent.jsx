import { useRef } from "react";
import { TileLayer, Marker, Popup, MapContainer, Pane, LayersControl, useMapEvent} from "react-leaflet"
import { API_KEY } from "../utils/constants";

function SetViewOnClick({ animateRef }) {
    const map = useMapEvent('click', (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: animateRef.current || false,
      })
    })
    return null
}

const MapComponent = ({lat=19, lon=73, layers}) => {
    const animateRef = useRef(true)

    const styleMap = {
        flex: 1,
        height: "100%",
    }
    
    return (
        <div id="map" className="sm:h-[500px] h-[200px]">
            <MapContainer trackResize className="rounded border-2 h-10" center={[lat,lon]} zoom={5} style={styleMap} scrollWheelZoom={false}>
            <SetViewOnClick animateRef={animateRef} />

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
