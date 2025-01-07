// Function to display greeting based on current time
function displayGreeting() {
    const greetingElement = document.getElementById("greeting-message");
    const currentHour = new Date().getHours();
}

// Function to display the current date
function displayDate() {
    const dateElement = document.getElementById("current-date");
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    dateElement.textContent = "Hari: " + formattedDate;
}

// Function to display current time in real-time
function displayTime() {
    const timeElement = document.getElementById("current-time");
    
    function updateTime() {
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        timeElement.textContent = "Jam: " + timeString;
    }
    
    // Update time every second
    setInterval(updateTime, 1000);
}

// Call the functions when the page loads
window.onload = function() {
    displayDate();
    displayTime();
};
