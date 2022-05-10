import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { Row, Col } from "../../components/common/Grid";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./Details.module.scss";
import statusMapping from "../../configs/propertyStatusMapping";
import { getDetails, resetDetails } from "../../store/propertyDetails/slice";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import Label from "../../components/common/Label";
import AssistantCard from "../../components/AssistantCard";
import TenantCard from "../../components/TenantCard";
import Headline from "../../components/common/Headline";
import Text from "../../components/common/Text";

const DetailsPage: FC = () => {
  const details = useAppSelector((state) => state.propertyDetails.details);
  const dispatch = useAppDispatch();
  const params = useParams();
  useDocumentTitle(details?.address || "");

  useEffect(() => {
    const getData = async () => {
      await dispatch(getDetails(params.id));
    };
    getData();

    return () => {
      dispatch(resetDetails());
    };
  }, [params.id, dispatch]);

  if (!details) return null;

  const status = statusMapping[details.status.toLowerCase()];

  return (
    <Row tag="section">
      <Col width={{ md: 12, lg: 9 }}>
        <Row tag="section" className={styles.gallery}>
          <Col width={{ xs: 12, md: 6, lg: 8 }}>
            <div className={styles.galleryMainImage}>
              <img src={details.image} alt="" />
            </div>
          </Col>
          <Col width={{ xs: 12, md: 6, lg: 4 }}>
            <div className={styles.galleryItems}>
              {details.gallery.map((item) => (
                <div className={styles.galleryItem}>
                  <img src={item} alt={details.address} key={item} />
                </div>
              ))}
              <div className={styles.galleryMore}>Show all photos</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col width={{ md: 12, lg: 8 }}>
            <section className={styles.info}>
              <Label
                text={status.text}
                color={status.color}
                className={styles.status}
              />
              <Headline>{details.address}</Headline>
              <Text color="secondary">{details.location}</Text>
            </section>
          </Col>
        </Row>
        <Row>
          <Col width={{ xs: 12, md: 8, lg: 4 }}>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureTitle}>Rooms: </div>
                <span>{details.specifications.rooms}</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureTitle}>Bathrooms: </div>
                <span>{details.specifications.bathrooms}</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureTitle}>Space: </div>
                <span>{details.specifications.area} m²</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            {details.description} {details.description}
            {details.description}
            {details.description}
            {details.description}
            {details.description}
            {details.description}
            {details.description}
            {details.description}
            {details.description}
            {details.description}
            {details.description}
          </Col>
        </Row>
      </Col>

      <Col width={{ xs: 3 }}>
        {details.agent && <AssistantCard {...details.agent} />}
        {details.tenant && <TenantCard {...details.tenant} />}
      </Col>
    </Row>
  );
};

export default DetailsPage;
