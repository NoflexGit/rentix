import React, { FC, useState } from "react";

import { Row, Col } from "../../components/common/Grid";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ApartmentCard from "../../components/ApartmentCard";
import Space from "../../components/common/Space";
import PropertyMap from "../../components/PropertyMap";
import styles from "./Properties.module.scss";

import apartment1 from "../../assets/images/apartment-1.jpeg";
import apartment2 from "../../assets/images/apartment-2.jpeg";
import apartment3 from "../../assets/images/apartment-3.webp";

const items = [
  {
    id: 1,
    image: apartment1,
    address: "17 Prioress St",
    location: "London SE1 4TE, UK",
    rooms: 3,
    bathrooms: 1,
    space: 66,
    geo: {
      lat: 51.506756,
      lng: -0.245887,
    },
  },
  {
    id: 2,
    image: apartment2,
    address: "13 Bartholomew St",
    location: "London SE1 4AJ, UK",
    rooms: 2,
    bathrooms: 1,
    space: 43,
    geo: {
      lat: 51.49277,
      lng: -0.127649,
    },
  },
  {
    id: 3,
    image: apartment3,
    address: "19 Vincent Square",
    location: "London SW1P 2NA, UK",
    rooms: 1,
    bathrooms: 1,
    space: 33,
    geo: {
      lat: 51.492745,
      lng: -0.133946,
    },
  },
  {
    id: 3,
    image: apartment1,
    address: "19 Vincent Square",
    location: "London SW1P 2NA, UK",
    rooms: 1,
    bathrooms: 1,
    space: 33,
    geo: {
      lat: 51.492745,
      lng: -0.233946,
    },
  },
];

const ApartmentsPage: FC = () => {
  useDocumentTitle("My Properties");
  const [active] = useState(items[0]);

  return (
    <Row tag="section" className={styles.wrapper}>
      <Col width="6">
        <Space fluid>
          {items.map((item) => (
            <ApartmentCard data={item} key={item.id} />
          ))}
        </Space>
      </Col>
      <Col width="6">
        <PropertyMap items={items} active={active} />
      </Col>
    </Row>
  );
};

export default ApartmentsPage;
