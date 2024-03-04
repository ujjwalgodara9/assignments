Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function formatTimeHHMMSSAMPM(date) {
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

// Function to update the clock display
function updateClock() {
    const now = new Date();
    
    const timeHHMMSSAMPM = formatTimeHHMMSSAMPM(now);
    console.log('HH:MM:SS:', timeHHMMSS);
    console.log('HH:MM:SS AM/PM:', timeHHMMSSAMPM);
}

// Update the clock display every second
setInterval(updateClock, 1000);