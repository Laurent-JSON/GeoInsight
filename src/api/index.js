import axios from 'axios';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-key': '6f27642702mshcdbe445d9f7a020p1cc35bjsne570c3095f75',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

export const getPlacesData = async (type, sw, ne) => {
  try {
    // const response = await axios.get(URL, options);
    // console.log(response.data);
    const { data: data} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw?.lat,
        bl_longitude: sw?.lng,
        tr_longitude: ne?.lng,
        tr_latitude: ne?.lat,
      },
      headers: {
        // 'x-rapidapi-key': '6f27642702mshcdbe445d9f7a020p1cc35bjsne570c3095f75',
        // 'x-rapidapi-key': '2416b55788msh479958b091935f1p192349jsnfd392361a9a0',
        'x-rapidapi-key': 'd3d1751117msh95df6add1664e16p14c538jsn46f5ab284819',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'Content-Type': 'application/json'
      }
    });
    return data?.data;
  } catch (error) {
    console.error(error);
  }
  
}

// import axios from "axios";

// export const getPlacesData = async (type, sw, ne) => {
//   try {
//     const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
//       params: {
//         bl_latitude: sw.lat,
//         bl_longitude: sw.lng,
//         tr_longitude: ne.lng,
//         tr_latitude: ne.lat,
//       },
//       headers: {
//         // 'x-rapidapi-key': '2416b55788msh479958b091935f1p192349jsnfd392361a9a0',
//         'x-rapidapi-key': 'd3d1751117msh95df6add1664e16p14c538jsn46f5ab284819',
//         'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
//       }
//     });

//     // Filter data to exclude places without valid coordinates
//     const validPlaces = filterValidPlaces(response.data.data);

//     return validPlaces;
//   } catch (error) {
//     console.error("Error while fetching data:", error);
//     return null; // Return null in case of an error
//   }
// };