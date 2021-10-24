import React from 'react';
import { Row, Col } from '@/components/Grid';
import apartment1 from '@/assets/images/apartment-1.jpeg';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import styles from './Apartments.module.scss';

const ApartmentsPage = (): JSX.Element => {
  useDocumentTitle('My Apartments');
  return (
    <Row tag="section">
      <Col width="4">
        <section className={styles.apartmentsList}>
          <div className={styles.apartmentsListItem}>
            <div className={styles.apartmentsListItemImg}>
              <img src={apartment1} alt="Anemoonstraat 11MP" />
            </div>
            <div className={styles.apartmentsListItemAddress}>
              <p>193 May Street</p>
              <span>New Port, 893 HS London</span>
            </div>
            <div className={styles.apartmentsListItemDates}>
              <div>Rented from February 25, 2020</div>
              <div>Next payment: 25 May 2022</div>
            </div>
          </div>
        </section>
      </Col>
    </Row>
  );
};

export default ApartmentsPage;
