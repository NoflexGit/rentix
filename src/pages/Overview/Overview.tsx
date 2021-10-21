import React from 'react';
import { ReactComponent as BroomSvg } from '@/assets/images/icons/broom.svg';
import { ReactComponent as KeySvg } from '@/assets/images/icons/key.svg';
import { ReactComponent as DocumentSvg } from '@/assets/images/icons/document.svg';
import { ReactComponent as BulbSvg } from '@/assets/images/icons/bulb.svg';
import { ReactComponent as FlameSvg } from '@/assets/images/icons/flame.svg';
import { ReactComponent as RaindropsSvg } from '@/assets/images/icons/raindrops.svg';
import Space from '@/components/Space/Space';
import { Row, Col } from '@/components/Grid';

import styles from './Overview.module.scss';

const OverviewPage = (): JSX.Element => {
  return (
    <section>
      <Row tag="section">
        <Col>
          <div className={`${styles.card} ${styles.card_1}`}>
            <div className={styles.icon}>
              <BulbSvg />
            </div>
            <section className={styles.text}>
              <div className={styles.description}>Current electricity consumption</div>
              <div className={styles.metric}>0.9 kW/h</div>
            </section>
          </div>
        </Col>
        <Col>
          <div className={`${styles.card} ${styles.card_2}`}>
            <div className={styles.icon}>
              <RaindropsSvg />
            </div>
            <section className={styles.text}>
              <div className={styles.description}>Current water consumption</div>
              <div className={styles.metric}>0.012 m³/h</div>
            </section>
          </div>
        </Col>
        <Col>
          <div className={`${styles.card} ${styles.card_3}`}>
            <div className={styles.icon}>
              <FlameSvg />
            </div>
            <section className={styles.text}>
              <div className={styles.description}>Current gas consumption</div>
              <div className={styles.metric}>0.231 m³/h</div>
            </section>
          </div>
        </Col>
      </Row>

      {/*<section className={styles.recentServices}>*/}
      {/*  <section className={styles.pageBlockTitle}>Recent services</section>*/}
      {/*  <div className={styles.recentServicesItem}>*/}
      {/*    <div className={styles.recentServicesItemImg}>*/}
      {/*      <img src={cleaning} alt="cleaning" />*/}
      {/*    </div>*/}
      {/*    <div className={styles.recentServicesItemText}>*/}
      {/*      Cleaning*/}
      {/*      <span className={styles.recentServicesItemPrice}>55$</span>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <Row>
        <Col width="4">
          <section className={styles.recentEvents}>
            <div className={styles.pageBlockTitle}>Latest Activity</div>
            <section className={styles.recentEventsList}>
              <Space>
                <div className={styles.recentEventsListItem}>
                  <div className={styles.recentEventsListItemIcon}>
                    <BroomSvg />
                  </div>
                  <div className={styles.recentEventsListItemText}>
                    Service order
                    <span className={styles.recentEventsListItemDate}>11:31 AM 19 Sep</span>
                  </div>
                </div>
                <div className={styles.recentEventsListItem}>
                  <div className={styles.recentEventsListItemIcon}>
                    <DocumentSvg />
                  </div>
                  <div className={styles.recentEventsListItemText}>
                    Bill paid{' '}
                    <span className={styles.recentEventsListItemDate}>10:40 AM 19 Sep</span>
                  </div>
                </div>
                <div className={styles.recentEventsListItem}>
                  <div className={styles.recentEventsListItemIcon}>
                    <KeySvg />
                  </div>
                  <div className={styles.recentEventsListItemText}>
                    Request for keys
                    <span className={styles.recentEventsListItemDate}>3:20 PM 19 Sep</span>
                  </div>
                </div>
                <div className={styles.recentEventsListItem}>
                  <div className={styles.recentEventsListItemIcon}>
                    <BroomSvg />
                  </div>
                  <div className={styles.recentEventsListItemText}>
                    Service order
                    <span className={styles.recentEventsListItemDate}>1:20 PM 15 Sep</span>
                  </div>
                </div>
              </Space>
            </section>
          </section>
        </Col>
      </Row>
    </section>
  );
};

export default OverviewPage;
