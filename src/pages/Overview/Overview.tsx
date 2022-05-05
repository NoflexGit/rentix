import React, { FC } from "react";
import ApexChart, { Props } from "react-apexcharts";
import Space from "../../components/common/Space";
import { Row, Col } from "../../components/common/Grid";
import Button from "../../components/common/Button";
import MoneySaveOnServices from "../../components/Banners/MoneySaveOnServices";
import manager from "../../assets/images/manager.png";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./Overview.module.scss";

const state: Props = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};

const OverviewPage: FC = () => {
  useDocumentTitle("Overview");

  return (
    <Space size={40} fluid>
      <Row tag="section">
        <Col width={{ xs: 9 }}>
          <Row tag="section">
            <Col>
              <div className={`${styles.card} ${styles.card_1}`}>
                <section className={styles.text}>
                  <div className={styles.metric}>$2 980</div>
                  <div className={styles.description}>Monthly revenue</div>
                </section>
              </div>
            </Col>
            <Col>
              <div className={`${styles.card} ${styles.card_2}`}>
                <section className={styles.text}>
                  <div className={styles.metric}>$98 560</div>
                  <div className={styles.description}>Total revenue</div>
                </section>
              </div>
            </Col>
            <Col>
              <div className={`${styles.card} ${styles.card_3}`}>
                <section className={styles.text}>
                  <div className={styles.metric}>9</div>
                  <div className={styles.description}>Total tenants</div>
                </section>
              </div>
            </Col>
            <Col width={{ xs: 12 }}>
              <ApexChart
                options={state.options}
                series={state.series}
                type="area"
              />
            </Col>
          </Row>
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
    </Space>
  );
};

export default OverviewPage;
