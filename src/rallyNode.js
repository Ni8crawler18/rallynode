const axios = require('axios');

let config = {
  apiEndpoint: '',
  apiKey: ''
};

const configure = (options) => {
  config = { ...config, ...options };
};

const makeRequest = (requestData) => {
  const { apiEndpoint, apiKey } = config;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  return axios.post(apiEndpoint, requestData, { headers });
};

module.exports = { configure, makeRequest };