//xPutHTTP.js: Functional Logic.

define([
  "rsvp",
  "request",
  "Functions/log"
], function(
  rsvp,
  request,
  log
) {
  return function( Input ) {
    return new rsvp.Promise(function( resolve, reject ) {
      var bDebug = false;
      request.put( Input, function( error, response, body ) {
        log( "Error: " + JSON.stringify( error ), bDebug );
        log( "StatusCode: " + response.statusCode, bDebug )
        log( "Body: " + body, bDebug );
        if ( !error && response.statusCode === 200 ) {
          resolve( body );
        } else {
          reject({
            "Error": error,
            "Response": response
          });
        }
      });
    });
    
  };
});