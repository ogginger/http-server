//function.js: Functional Logic.

define([
  "rsvp",
  "request"
], function(
  rsvp,
  request
) {
  return function( Input ) {
    return new rsvp.Promise(function( resolve, reject ) {
      request.post( Input, function( error, response, body ) {
        if ( !error && response.statusCode === 200 ) {
          resolve( body );
        } else {
          reject({
            "Error": error,
            "Response": response
          });
        }
      })
    });
  };
});