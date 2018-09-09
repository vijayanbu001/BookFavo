import axios from 'axios';
// const baseURL = process.env.REACT_APP_BASE_URL
const goodreads = {
    client: axios.create({
        baseURL:"https://cors-anywhere.herokuapp.com/https://www.goodreads.com/",
        responseType: 'application/xml',
    })
}

const clients = {
    goodreads
}

export default clients;