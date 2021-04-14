console.log('hanseung');


const request = require('request')
const uuidv4 = require("uuid/v4")
const sign = require('jsonwebtoken').sign

// import request from 'request';
// import uuidv4 from 'uuid/v4';
// import sign from 'jsonwebtoken';
console.log(1);
console.log(sign);
console.log(2);

// const access_key = process.env.UPBIT_OPEN_API_ACCESS_KEY
// const secret_key = process.env.UPBIT_OPEN_API_SECRET_KEY
// const server_url = process.env.UPBIT_OPEN_API_SERVER_URL
const access_key = 'bk2M5jxtIAmyQliPotVUVLCiVmuMZoIxxVRaZoL1';
const secret_key = 'lraPTmwav7OsOwylzbF1xmqgkt8v3pxx0gsOvj3L';
const server_url = 'https://api.upbit.com';

const payload = {
    access_key: access_key,
    nonce: uuidv4(),
}

const token = sign(payload, secret_key)

const options = {
    method: "GET",
    url: server_url + "/v1/accounts",
    headers: {Authorization: `Bearer ${token}`},
}

function call() {
    request(options, (error, response, body) => {
        if (error) throw new Error(error)
        console.log(body)
    })
}

module.exports = call

/*
const fetch = require('node-fetch');

const url = 'https://api.upbit.com/v1/market/all';

const options1 = {method: 'GET', qs: {isDetails: 'false'}};

fetch(url, options1)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

*/