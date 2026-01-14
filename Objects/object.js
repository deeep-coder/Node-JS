// // 1. global

// // The global object in NodeJS is equivalent to the window object in browsers. 
// // Any variable or function added to global becomes globally accessible across the application.

// // global.a = 'This is a global variable';
// // console.log(a);        // Accessible from anywhere in the application

// Output
// This is a global variable

// ------------------------------------------------------------------------------------

// Process 

// it helps you manage things like environment settings, command-line arguments, and how the application behaves during execution.

// console.log("Process ID:", process.pid);
// console.log("Node.js Version:", process.version);

// Output
// Process ID: 32
// Node.js Version: v16.20.1

// ------------------------------------------------------------------------------------

// Buffer

// The Buffer class is used to deal with binary data in NodeJS. 
// It provides a way to handle raw binary data directly in memory, allowing you to manipulate binary files or network streams.

// const buffer = Buffer.from('Hello Node.js');
// console.log(buffer);  // Outputs the binary representation

// Output
// <Buffer 48 65 6c 6c 6f 20 4e 6f 64 65 2e 6a 73>


// ----------------------------------------------------------------------------------

// __dirname and __filename


// These are global variables that represent the directory name (__dirname) and the filename (__filename) of the current module (file).


// console.log(__dirname);  // Outputs the directory of the current file
// console.log(__filename); // Outputs the full path of the current file

// Output
// /home/guest/sandbox
// /home/guest/sandbox/Solution.js
