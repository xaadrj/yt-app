import axios from 'axios';
const KEY = 'AIzaSyC-uhGXeoEuzEIn3FuAn0nKmSuHiSZi-sM';


export default axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResult : '5',
        key : KEY
    }
});