import { useEffect, useState } from 'react';
import { CssBaseline } from '@mui/material';
import Grid from '@mui/material/Grid';

import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import { getPlacesData } from './api';

const App = () => {

  const [places, setPlaces] = useState([]);
  // const [filteredPlaces, setFilteredPlaces] = useState([]);

  // const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [coordinates, setCoordinates] = useState({ lat: 52.5200, lng: 13.4050 });
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log({coordinates}, {bounds});
    setIsLoading(true);

    getPlacesData(bounds?.sw, bounds?.ne)
      .then(data => {
        setPlaces(data);
        setIsLoading(false);
        // console.log(data);
      });


  }, [coordinates, bounds])
  return (
    <>
      <CssBaseline />
      <Header />

      <Grid
        container
        spacing={3}
        sx={{ width: '100%', height: '100vh' }}
      >
        <Grid size={{ xs: 12, md: 4 }} sx={{ height: '100%' }}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={places}
          // type={type}
          // setType={setType}
          // rating={rating}
          // setRating={setRating}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }} sx={{ height: '100%' }}>
          <Map
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
  // return (
  //   <>
  //     <CssBaseline />
  //     <Header />
  //     {/* <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} /> */}

  //     <div style={{ display: 'flex', width: '100%', gap: '24px',  }}>
  //       <div style={{ width: '33.33%' }}>
  //         <List places={ places } />
  //         <List
  //           // isLoading={isLoading}
  //           // childClicked={childClicked}
  //           // places={filteredPlaces.length ? filteredPlaces : places}
  //           // type={type}
  //           // setType={setType}
  //           // rating={rating}
  //           // setRating={setRating}
  //         />
  //       </div>
  //       <div style={{ width: '66.66%' }}>
  //         <Map
  //           // setChildClicked={setChildClicked}
  //           setBounds={setBounds}
  //           setCoordinates={setCoordinates}
  //           coordinates={coordinates}
  //           // places={filteredPlaces.length ? filteredPlaces : places}
  //           // weatherData={weatherData}
  //         />
  //       </div>
  //     </div>
  //   </>
  // );
};

export default App;
