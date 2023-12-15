import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import CustomMarker from "../Fragments/CustomMarker";
import * as L from "leaflet";
import { renderToString } from "react-dom/server";

type DataType = {
  idSatwa: string;
  name: string;
  description: string;
  sortDesc: string;
  location: string;
  image: string;
  coorX: number;
  coorY: number;
  idxSatwa: number;
};

const Map = () => {
  const [dataSatwa, setDataSatwa] = useState<DataType[]>();

  // const markers = [
  //   {
  //     geocode: [-8.451, 116.1375],
  //   },
  //   {
  //     geocode: [-8.6041, 117.4991],
  //   },
  //   {
  //     geocode: [-8.9231, 116.9951],
  //   },
  //   {
  //     geocode: [-8.4737, 118.9038],
  //   },
  // ];

  const CustomMarkerIcon = (pathImg: string) => {
    const customMarkerIcon = L.divIcon({
      html: renderToString(<CustomMarker pathImg={pathImg}/>),
      iconSize: [10, 10],
      iconAnchor: [60, 80],
      className: "hiden-initial-width",
    });

    return customMarkerIcon
  }

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/data-satwa");
      const result = await response.json();
      const filteredData = result.filter(
        (data: DataType) => data.coorX && data.coorY
      );
      setDataSatwa(filteredData);
    } catch (error) {
      console.log("failed fetching data : " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      minZoom={8}
      maxZoom={11}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
      />
      {dataSatwa?.map((data: DataType, index: number) => (
        <Marker
          position={[data.coorX, data.coorY]}
          icon={CustomMarkerIcon(data.image)}
          key={index}
        >
          <Popup>
            <span className="text-lg font-semibold">{data.name}</span>
            <p>{data.sortDesc}</p>{" "}
            <Link href={`/map/detail/${data.idxSatwa}`}>See Details</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
