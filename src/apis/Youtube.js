import axios from 'axios';

const KEY = 'AIzaSyB-3C1Lfh7kf2g70Y0px8iFqkVLEejsrv4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
});

