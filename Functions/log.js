//log.js: Functional Logic for outputting to console.

define([], function() {
  return function( Input, Boolean ) {
    if ( Boolean === undefined ) {
      Boolean = true;
    }
    
    
    if ( Boolean === true ) {
      console.log( Input ); 
    }
  };
});