'use strict';

// require('letsencrypt-express')
require('letsencrypt-express').create({

  server: 'staging'

, email: 'adisakchaiyakul@gmail.com'

, agreeTos: true

, approvedDomains: [ 'wheelborrow.com', 'www.wheelborrow.com' ]

, app: require('express')().use('/', function (req, res) {
    res.end('Hello, World!');
  })

, debug: true

}).listen(80, 443);
