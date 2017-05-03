var axios = require('axios');

//import { apiPrefix } from '../../etc/config.json';
var apiPrefix = 'https://jamaurznightlifecoordination.herokuapp.com';

export default {
    add(eventName) {
        return axios.post('https://jamaurznightlifecoordination.herokuapp.com/add', {'event': eventName});
    },
    searchAddressCoord(city) {
        return axios.post('https://jamaurznightlifecoordination.herokuapp.com/city', {'city': city});
    },
    singIn() {
        return axios.get('https://jamaurznightlifecoordination.herokuapp.com/info')
    },
    infoCity() {
        return axios.get('https://jamaurznightlifecoordination.herokuapp.com/infocity')
    },
    getEvent() {
       return axios.get('https://jamaurznightlifecoordination.herokuapp.com/getevent');
    },
    getEventG(location) {
       return axios.post('https://jamaurznightlifecoordination.herokuapp.com/geteventg', {lat: location.lat, lng: location.lng});
    }
}
