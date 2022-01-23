import {Loader} from '@googlemaps/js-api-loader';
import  React, { useEffect, useRef } from 'react';
import styles from '../styles/Map.module.css';

export default function ChurchMap() {
    const googlemap = useRef(null);  useEffect(() => {
        const receptionCoords = {lat: 29.944215875250276, lng: -90.07843160181477};

        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_API_MAP_KEY,
          version: 'weekly',
        });
        let map;
        loader.load().then(() => {
          const google = window.google; 
          map = new google.maps.Map(googlemap.current, {
            center: receptionCoords,
            zoom: 17,
          });
        });
      });
    return (
        <div className={styles.container} ref={googlemap}></div>
    )
}