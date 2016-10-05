var privateKey = fs.readFileSync( 'key.pem' );
var certificate = fs.readFileSync( 'csr.pem' );

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(port);
