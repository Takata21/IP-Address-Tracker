import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Spinner from './Spinner';
const Map = ({ isLoading, coordinates, ipInfo }) => {
  return (
    <div className="map-h">
      {isLoading ? (
        <Spinner />
      ) : (
        <MapContainer
          center={coordinates}
          zoom={13}
          className="map-h overflow-hidden"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              {ipInfo?.location.city}, <br />
              {ipInfo?.location.region}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
