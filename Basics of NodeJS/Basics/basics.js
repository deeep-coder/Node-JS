const http = require('http'); // imported http module

const server = http.createServer((req, res) => { //create new sercer that listens incomint HTTP requests (Callback function)
    res.write('Hello World!'); // send the response
    res.end(); // end the response
});

server.listen(3000, () => {  
    console.log('Server running on port 3000');
});



// NOTES 

// NodeJS is a JavaScript runtime environment built on Chrome’s V8 JavaScript engine that allows developers to execute JavaScript code outside the browser. It can make console-based and web-based NodeJS applications.

// * Features - 1)Non-blocking I/O (asynchronus and enable to handling of concurrent requests)
//                 2) single threded model

// Modules in NodeJS are reusable pieces of code that can be imported into your application.
// common modules are HTTP,FS,Path,Event,Express etc.


// Advantages of NodeJS - high performance,scalable,cross-platform .