import React, { FC, useState } from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import { googleMapsStyles } from "../../configs/googleMapStyles";
import { ReactComponent as HouseSvg } from "../../assets/images/icons/home-solid-white.svg";
import styles from "./PropertyMap.module.scss";

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "20px",
};

interface IProps {
  items: Array<{
    id: number | string;
    image: string;
    address: string;
    location: string;
    rooms: number;
    bathrooms: number;
    space: number;
    geo: google.maps.LatLngLiteral;
  }>;
  active: {
    id: number | string;
    image: string;
    address: string;
    location: string;
    rooms: number;
    bathrooms: number;
    space: number;
    geo: google.maps.LatLngLiteral;
  };
}

const PropertyMap: FC<IProps> = ({ items, active }) => {
  const [, setMap] = useState<google.maps.Map | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "property-map",
    googleMapsApiKey: "AIzaSyBBcthieXCzlwvYgzX3aGZqRn4lfNKKees",
    language: "en",
    region: "en",
  });
  const onMapLoad = (map: google.maps.Map) => setMap(map);

  if (!isLoaded) {
    return null;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={active.geo}
      zoom={14}
      onLoad={onMapLoad}
      options={{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        styles: googleMapsStyles,
      }}
    >
      {items.map((item) => (
        <OverlayView
          position={item.geo}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          key={item.id}
        >
          <section className={styles.wrapper}>
            <div className={styles.tooltip}>
              <img src={item.image} alt={item.address} />
            </div>
            <div className={styles.marker}>
              <HouseSvg />
            </div>
          </section>
        </OverlayView>
      ))}
    </GoogleMap>
  );
};

export default PropertyMap;
