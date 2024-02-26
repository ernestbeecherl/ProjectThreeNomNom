const Yelp = require('yelp');
require('dotenv').config();

const yelp = new Yelp({
    clientId: process.env.API_KEY, //|| 'WxNvD3CiqGyoYHtVCP7UzA'
    clientSecret: process.env.API_SECRET //|| 'joyVR4sZF7Iw4usNaD0b4UM5KgNvrs67HFZ9SecXMjT5966uzr9ENXIndrmx5EMx8eQzOGp23x1sf8GG9JDB1qPCH_m3kws18wvnL0bodJ8a78JJ7ATc1xYfPvnXZXYx'

});