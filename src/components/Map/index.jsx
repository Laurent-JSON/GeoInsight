import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import useStyles from './styles.js';

const Map = () => {
  const { classes } = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  const coordinates = { lat: 0, lng: 0 }

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={''}
        // onChange={(e) => {
        //   setCoords({ lat: e.center.lat, lng: e.center.lng });
        //   setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        // }}
        onChildClick={''}
        // onChildClick={(child) => setChildClicked(child)}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
