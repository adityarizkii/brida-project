import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import Link from "next/link";

const Map = () => {
  const markers = [
    {
      geocode: [-8.451, 116.1375],
    },
    {
      geocode: [-8.6041, 117.4991],
    },
    {
      geocode: [-8.9231, 116.9951],
    },
    {
      geocode: [-8.4737, 118.9038],
    },
  ];

  const customMarkerIcon = Leaflet.divIcon({
    html: '<img src="/marker-rusa.svg" alt="marker"/>',
    iconSize: [95, 95],
    className: "hiden-initial-width",
  });

  return (
    <MapContainer
      center={[-8.5802, 116.10089]}
      zoom={9}
      maxBounds={[
        [-8.1571, 119.4598], // atas kanan
        [-8.8742, 115.6421], // bawah kiri
      ]}
      scrollWheelZoom={false}
      doubleClickZoom={true}
      minZoom={9}
      maxZoom={11}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
      />
      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customMarkerIcon}>
          <Popup>
            <span className="text-lg font-semibold">Rusa Timor</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
              numquam.
            </p>{" "}
            <Link href={"/map/detail/1"}>See Details</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
