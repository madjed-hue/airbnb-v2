import React, { useState } from "react";
import ReactMapboxGl, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const MapGl = ({ data }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = data.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  const handleClose = () => {
    setSelectedLocation({});
  };

  return (
    <ReactMapboxGl
      {...viewState}
      onMove={(e) => setViewState(e.viewState)}
      mapStyle="mapbox://styles/madjed/clb6bwszt003c14s0as0fre2d"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {data.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              anchor="top"
            >
              📌
            </p>
          </Marker>
          {selectedLocation?.long === result.long ? (
            <Popup
              closeOnClick={false}
              onClose={handleClose}
              longitude={result.long}
              latitude={result.lat}
              anchor="bottom"
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapboxGl>
  );
};

export default MapGl;
