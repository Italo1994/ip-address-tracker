import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapView } from "./ContainerMapStyles";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from 'react';

// Corrige o problema do ícone padrão não aparecer:
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function ChangeView({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], map.getZoom(), {
        animate: true,
      });
    }
  }, [lat, lng, map]);

  return null;
}

export function ContainerMap() {
    const geo = useSelector((state: RootState) => state.geo);
    const lat = geo?.latitude ?? 0;
    const lng = geo?.longitude ?? 0;
    const position: [number, number] = [lat, lng]

    if (!geo || !geo.latitude || !geo.longitude) {
        return <p>Carregando mapa...</p>;
    }

    return (
        <MapView>
            <MapContainer
                center={[lat, lng] as [number, number]}
                zoom={13}
                style={{ height: "500px", width: "100%", borderRadius: "12px" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {geo.latitude && geo.longitude && (
                    <ChangeView lat={geo.latitude} lng={geo.longitude} />
                )}
                    
                <Marker position={position}>
                    <Popup>
                        📍 Você está aqui!
                    </Popup>
                </Marker>
            </MapContainer>
        </MapView>
    )
}