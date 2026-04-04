import { useState } from 'react';
import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Stack,
  Box,
} from '@mui/material';

import PlaceDetails from '../PlaceDetails';

import useStyles from './styles.js';

const List = ( { places, childClicked }) => {
  console.log("🚀 ~ List ~ childClicked:", childClicked)
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
      <Box className={classes.list}>
        <Stack spacing={3}>
          {places?.map((place, i) => {
            return <PlaceDetails key={i} place={place} />;
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default List;
