## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

// Content to write to the file
const content = "Hello, world! This is written to a file.";

// Function to write content to a file
function writeToFile(filename, contentToWrite) {
    fs.writeFile(filename, contentToWrite, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Content has been written to the file successfully.');
    });
}

// Write content to a file named 'output.txt'
writeToFile('output.txt', content);
