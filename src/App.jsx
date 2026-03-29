import { CssBaseline } from '@mui/material';
import Grid from '@mui/material/Grid';

import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';

const App = () => {

  return (
    <>
      <CssBaseline />
      <Header />
      {/* <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} /> */}
      
      <div style={{ display: 'flex', width: '100%', gap: '24px' }}>
        <div style={{ width: '33.33%' }}><h1>List</h1>
          {/* <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          /> */}
        </div>
        <div style={{ width: '66.66%' }}>
          <Map />
          {/* <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          /> */}
        </div>
      </div>
    </>
  );
};

export default App;
