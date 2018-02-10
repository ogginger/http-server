//function.js: Functional Logic.

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
      var bDebug = true;
      request.del( Input, function( error, response, body ) {
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