import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "../../components/common/Grid";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PropertyCard from "../../components/PropertyCard";
import Space from "../../components/common/Space";
import PropertyMap from "../../components/PropertyMap";
import styles from "./Explore.module.scss";
import { getPropertiesByUserId } from "../../services/properties";
import useAppSelector from "../../hooks/useAppSelector";

const ExplorePage: FC = () => {
  useDocumentTitle("Explore");
  const userId = useAppSelector(({ user }) => user.id);
  const [items, setItems] = useState<any>([]);
  const [active, setActive] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getPropertiesByUserId(userId);
        setItems(data);
        setActive(data[0]);
        // eslint-disable-next-line no-empty
      } catch (e) {}
    };
    getData();
    // eslint-disable-next-line
  }, [userId]);

  if (!items.length) {
    return null;
  }

  return (
    <Row tag="section" className={styles.wrapper}>
      <Col width={{ xs: 12, md: 8, lg: 6 }}>
        <div className={styles.scroll}>
          <Space fluid>
            {items.map((item: IProperty) => (
              <Link
                to={item.id}
                key={item.id}
                className={styles.link}
                onMouseOver={() => setActive(item)}
              >
                <PropertyCard data={item} />
              </Link>
            ))}
          </Space>
        </div>
      </Col>
      <Col width={{ xs: 12, md: 8, lg: 6 }}>
        <PropertyMap items={items} active={active} />
      </Col>
    </Row>
  );
};

export default ExplorePage;
