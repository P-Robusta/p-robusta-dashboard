/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../assets/css/style.css';

function Maps() {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    const { google } = window;
    let map = mapRef.current;
    const lat = '16.059758';
    const lng = '108.243502';
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map,
      animation: google.maps.Animation.DROP,
      title: 'Light Bootstrap Dashboard PRO React!',
    });

    const contentString = '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>'
      + '<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>';

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, 'click', () => {
      infowindow.open(map, marker);
    });
  }, []);
  return (
    <>
      <div className="map-container">
        <h1 className="title-map-page"><center>Address</center></h1>
        <div>
          <center>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.110337060665!2d108.24131331490719!3d16.059763143957195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAzJzM1LjEiTiAxMDjCsDE0JzM2LjYiRQ!5e0!3m2!1sen!2s!4v1625076596474!5m2!1sen!2s"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </center>
          <div id="map" ref={mapRef} />
        </div>
      </div>
    </>
  );
}

export default Maps;
