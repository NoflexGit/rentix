import React, { FC } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ApexChart, { Props } from "react-apexcharts";

import { Row, Col } from "../../components/common/Grid";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./Details.module.scss";

import manager from "../../assets/images/manager.png";
import apartment1 from "../../assets/images/apartment-1.jpeg";
import apartment2 from "../../assets/images/apartment-2.jpeg";
import Button from "../../components/common/Button";
import PropertyMap from "../../components/PropertyMap";

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
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const state2: Props = {
  series: [
    {
      name: "17 Prioress St",
      data: [935, 935, 980, 980, 500, 980],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    colors: ["#5d42bd", "#8762c8", "#a681d3"],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2021 GMT",
        "02/01/2021 GMT",
        "03/01/2021 GMT",
        "04/01/2021 GMT",
        "05/01/2021 GMT",
        "06/01/2021 GMT",
      ],
    },
    legend: {
      position: "bottom",
    },
    fill: {
      opacity: 1,
    },
  },
};

const ApartmentsPage: FC = () => {
  useDocumentTitle("6");

  return (
    <>
      <Row tag="section">
        <Col width={{ md: 12, lg: 9 }}>
          <Row tag="section" className={styles.gallery}>
            <Col width={{ xs: 9 }}>
              <div className={styles.mainImage}>
                <img src={apartment1} alt="" />
              </div>
            </Col>
            <Col width={{ xs: 3 }}>
              <div className={styles.images}>
                <img src={apartment2} alt="" />
                <img src={apartment1} alt="" />
                <img src={apartment2} alt="" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col width={{ xs: 3 }}>
          <div className={styles.pageBlockTitle}>Agent</div>
          <section className={`${styles.panel} ${styles.personalManager}`}>
            <div className={styles.personalManagerImage}>
              <img src={manager} alt="managerImg" />
            </div>
            <div className={styles.personalManagerName}>James Williams</div>
            <div className={styles.personalManagerText}>
              Do you have any questions? <br /> Please call me or send me a
              message.
            </div>
            <div className={styles.personalManagerPhone}>+33 839 799 28 45</div>
            <Button size="small" fluid>
              Send message
            </Button>
          </section>
          <PropertyMap items={items} active={items[0]} />
        </Col>
      </Row>
      <Row>
        <Col width={{ md: 12, lg: 9 }}>
          <section className={styles.info}>
            <div className={styles.address}>
              <p> 13 Bartholomew St</p>
              <span>London SE1 4AJ, UK</span>
            </div>
          </section>
        </Col>
      </Row>
      <Row>
        <Col width={{ xs: 6, lg: 3 }}>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>Rooms: </div>
              <span>2</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>Bathrooms: </div>
              <span>1</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>Space: </div>
              <span>89 m²</span>
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col width={{ xs: 3 }}>
          <div className={styles.pageBlockTitle}>Property statistics</div>
          <ApexChart
            options={state2.options}
            series={state2.series}
            type="bar"
            height={350}
          />
        </Col>
      </Row> */}
    </>
  );
};

export default ApartmentsPage;
