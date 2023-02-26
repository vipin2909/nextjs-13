import React, { useEffect } from 'react';
import PocketBase from 'pocketbase';
import styles from './card.module.css';

const Card = ({ ...props }) => {
  const { name, image, desc, designation } = props;

  useEffect(() => {
    const record = async () => {
      const pb = new PocketBase('https://pocketbase.io');
      const result = await pb
        .collection('testimonials')
        .getOne('RECORD_ID', { expand: 'name,image,designation,desc' });

      return result;
    };
    console.log({ record });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        <img
          className={styles.cardImage}
          src={image}
          alt="card-heading-image"
        />
        <div className={styles.cardName}>{name}</div>
        <div className={styles.cardDesignation}>{designation}</div>
      </div>
      <div className={styles.cardDesc}>{desc}</div>
    </div>
  );
};

export default Card;
