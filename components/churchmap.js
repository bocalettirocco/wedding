import {Loader} from '@googlemaps/js-api-loader';
import  React, { useEffect, useRef } from 'react';
import styles from '../styles/Map.module.css';

export default function ChurchMap() {
    const googlemap = useRef(null);  useEffect(() => {
        const churchCoords = {lat: 29.955685781914664, lng: -90.1142186630788};

        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_API_MAP_KEY,
          version: 'weekly',
        });
        let map;
        loader.load().then(() => {
          const google = window.google; 
          map = new google.maps.Map(googlemap.current, {
            center: churchCoords,
            zoom: 16,
          });
        });
      });
    return (
        <div className={styles.container} ref={googlemap}></div>
    )
}