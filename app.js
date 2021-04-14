console.log('hanseung');

const http = require('http');

const express = require('express');
const fs = require('fs')
const request = require('request')
const uuidv4 = require("uuid/v4")
const sign = require('jsonwebtoken').sign

var app = express();
var port = 3000;


app.listen(port, function(){
	console.log('Server Start, Port : ' + port);
});

app.get('/', function(req, res){
	fs.readFile('index.html', function(error, data){
		if(error){
			console.log(error);
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		}
	});
});

console.log(1);
console.log(sign);
console.log(2);

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