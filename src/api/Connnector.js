import axios from 'axios';

const Connector = axios.create({
  baseURL: '' //"https://cors-anywhere.herokuapp.com/"
});

export default Connector;