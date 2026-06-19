import axios from 'axios'

const urlBase = 'https://wttr.in'

const getStateWeather = (stateName) => {
    const request = axios.get(`${urlBase}/${stateName}?format=j1`);
    return request.then(response => response.data)
}

export default { getStateWeather }