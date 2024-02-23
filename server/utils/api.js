const Yelp = require('yelp');
require('dotenv').config();

const yelp = new Yelp({
    clientId: process.env.API_KEY, //|| 'WxNvD3CiqGyoYHtVCP7UzA'
    clientSecret: process.env.API_SECRET //|| 'bPO5F5aA4ZudgL235rrJeRWV8Y1jtL3TRdUrv0ByTh_lugiHQRkqvx-7Kibr0sRZyaM8HlEyEF1bX2zKMaX4HY_V5QS3i14QFsKvhOYUV5gQGesl-smewWgger7OZXYx'

});