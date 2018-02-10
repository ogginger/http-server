//build.js: Configuration file for optimizing server side http function suite. 
/*
	1. http's dependencies are nodejs's request and rsvp.
*/ 
({
    baseUrl: ".",
    paths: {
			"rsvp": "lib/rsvp.min",
 			"request": "empty:"
    },
    exclude: [ "rsvp", "request" ],
    name: "http",
    out: "http.min.js"
})
