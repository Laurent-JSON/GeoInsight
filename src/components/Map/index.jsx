import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import placeholderImage from '../../assets/Restaurant-Placeholder-001.jpg'

import useStyles from './styles.js';

const Map = ({ coordinates, places, setCoordinates, setBounds, setChildClicked, weatherData }) => {
  const { classes } = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCOq4mEfab1roWnvzDaERKQbbnLR1YJLCk' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          // console.log(e);
          setBounds({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.length && places.map((place, i) => {
          return <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : placeholderImage}
                  />
                  {/* <Rating name="read-only" size="small" value={Number(place.rating)} readOnly /> */}
                  {/* <Rating sx={{ transform: 'translate(-4%, 0)' }} name="read-only" size="small" value={Number(place.rating)} readOnly /> */}
                  <Rating
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                    sx={{
                      fontSize: '1rem',
                      alignSelf: 'flex-start',
                    }}
                  />
                </Paper>
              )}
          </div>;
        })}
      </GoogleMapReact>
    </div>
  )
}

export default Map
