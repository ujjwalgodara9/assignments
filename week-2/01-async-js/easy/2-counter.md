## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;

function incrementCounter() {
    counter++;
    console.log(counter);
    setTimeout(incrementCounter, 1000); // Schedule the next increment after 1 second
}

// Start the initial increment
setTimeout(incrementCounter, 1000);




































































(Hint: setTimeout)