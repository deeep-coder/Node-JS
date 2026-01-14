// Create a simple HTTP server that reads and serves a file.

import http from "http";
import fs from "fs"; //Used to read files, write files, delete files, etc.
import path from "path"; // Used to safely work with file paths
import { fileURLToPath } from "url"; // Imports a function to convert a file:// URL to a normal file path
                                    //Required because this code uses ES Modules (import) instead of require.

const __filename = fileURLToPath(import.meta.url);//converts URL of current file into actual file path
                                                // file:///Users/test/app.js → /Users/test/app.js

const __dirname = path.dirname(__filename); // directory name of the current file.    eg- /Users/test/app.js → /Users/test

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "message.txt");//create full path of message.txt  eg-/Users/test + message.txt → /Users/test/message.txt

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.end("Error reading file");
        } else {
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

