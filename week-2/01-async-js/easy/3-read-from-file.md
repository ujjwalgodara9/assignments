## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

// Function to read contents of a file and print to console
function readFileAndPrint(filename) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File Contents:');
        console.log(data); // Print file contents to console

        // Simulate expensive operation (setTimeout with 2-second delay)
        setTimeout(() => {
            console.log('Expensive operation completed.');
        }, 2000);
    });
}

// Read the contents of the file 'example.txt'
readFileAndPrint('example.txt');
