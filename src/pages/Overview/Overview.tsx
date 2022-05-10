import React, { FC } from "react";
import ApexChart, { Props } from "react-apexcharts";
import Space from "../../components/common/Space";
import { Row, Col } from "../../components/common/Grid";
import Button from "../../components/common/Button";
import MoneySaveOnServices from "../../components/Banners/MoneySaveOnServices";
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
      animations: {
        enabled: false,
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
        </Space>
      </Col>
      <Col width={{ xs: 3 }}>
        <MoneySaveOnServices />
      </Col>
    </Row>
  );
};

export default OverviewPage;
