import React, { FC } from "react";
import ApexChart, { Props } from "react-apexcharts";
import Space from "../../components/common/Space";
import { Row, Col } from "../../components/common/Grid";
import Button from "../../components/common/Button";
import MoneySaveOnServices from "../../components/Banners/MoneySaveOnServices";
import manager from "../../assets/images/manager.png";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./Overview.module.scss";

const state1: Props = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51],
    },
  ],
  tooltip: {
    theme: "dark",
  },
  markers: {
    size: 0,
  },
  options: {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      opacity: 0.85,
    },
    colors: ["#FFFFFF"],
    legend: {
      show: false,
    },
    grid: {
      padding: {
        left: 10,
        right: 10,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function formatter() {
            return "";
          },
        },
      },
    },
  },
};
const state2: Props = {
  series: [
    {
      name: "17 Prioress St",
      data: [935, 935, 980, 980, 500, 980],
    },
    {
      name: "13 Bartholomew St",
      data: [1800, 1800, 1800, 1800, 1100, 1800],
    },
    {
      name: "19 Vincent Square",
      data: [700, 700, 700, 700, 0, 0],
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
const OverviewPage: FC = () => {
  useDocumentTitle("Overview");

  return (
    <Row tag="section">
      <Col width={{ xs: 9 }}>
        <Space size="large" fluid>
          <Row tag="section">
            <Col width={{ xs: 4 }}>
              <div className={`${styles.card} ${styles.card_1}`}>
                <section className={styles.text}>
                  <div className={styles.metric}>$2 980</div>
                  <div className={styles.description}>Monthly revenue</div>
                </section>
                <div>
                  <ApexChart
                    options={state1.options}
                    series={state1.series}
                    height={60}
                    width={90}
                  />
                </div>
              </div>
            </Col>
            <Col width={{ xs: 4 }}>
              <div className={`${styles.card} ${styles.card_2}`}>
                <section className={styles.text}>
                  <div className={styles.metric}>$98 560</div>
                  <div className={styles.description}>Total revenue</div>
                </section>
                <div>
                  <ApexChart
                    options={state1.options}
                    series={state1.series}
                    height={60}
                    width={90}
                  />
                </div>
              </div>
            </Col>
            <Col width={{ xs: 4 }}>
              <div className={`${styles.card} ${styles.card_3}`}>
                <section className={styles.text}>
                  <div className={styles.metric}>9</div>
                  <div className={styles.description}>Total tenants</div>
                </section>
                <div>
                  <ApexChart
                    options={state1.options}
                    series={state1.series}
                    height={60}
                    width={90}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col width={{ xs: 8 }}>
              <div className={styles.pageBlockTitle}>Property statistics</div>
              <ApexChart
                options={state2.options}
                series={state2.series}
                type="bar"
                height={350}
              />
            </Col>
          </Row>
        </Space>
      </Col>
      <Col width={{ xs: 3 }}>
        <div className={styles.pageBlockTitle}>Personal manager</div>
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
        <MoneySaveOnServices />
      </Col>
    </Row>
  );
};

export default OverviewPage;
