import { useState } from 'react';
import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Stack,
} from '@mui/material';

import PlaceDetails from '../PlaceDetails';

import useStyles from './styles.js';

const List = () => {
  const { classes } = useStyles();

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  // configuration du menu
  const menuProps = {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    disablePortal: true,
    disableScrollLock: true,
  };

  const places = [
    {name: "Cool Places"},
    {name: "Cool Places"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
    {name: "Cool Places"},
    {name: "Cool Places for derferf ferfgtrgtrfer erferfer fgergtr"},
  ]

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Food & Dining around you
      </Typography>

      <FormControl className={classes.formControl} variant="standard">
        <InputLabel>Type</InputLabel>

        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          MenuProps={menuProps}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl} variant="standard">
        <InputLabel shrink={rating !== ''}>
          Rating
        </InputLabel>

        <Select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          MenuProps={menuProps}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Stack spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <PlaceDetails key={i} place={place} />
        ))}
      </Stack>
      {/* <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid key={i} item xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid> */}
      {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px', backgroundColor: 'red', maxHeight: '40%', overflowX: 'hidden' }}>
        {places?.map((place, i) => (
          <div  key={i}style={{ backgroundColor: 'blue' }}>
            <PlaceDetails place={place} />
          </div>
        ))}
      </div> */}
      {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
        {places?.map((place, i) => (
          <div ref={elRefs[i]} key={i}>
            <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
          </div>
        ))}
      </div> */}
      {/* <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid ref={elRefs[i]} key={i} item xs={12}>
            <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
};

export default List;
