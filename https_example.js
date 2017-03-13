var https = require('https');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// called by https when the request is made.

var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

//It is now outputting the data as it comes in.
// We've decided to appropriately label our response data
// as chunk and are also printing the length of the string
// just for the sake of curiosity.

console.log('I\'m about to make the request!');

https.request(options, callback).end();

console.log('I\'ve made the request!');
