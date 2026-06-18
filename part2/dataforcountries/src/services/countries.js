import axios from 'axios'

const urlBase = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
    const request = axios.get(`${urlBase}/all`);
    return request.then(response => response.data)
}

export default { getAll }