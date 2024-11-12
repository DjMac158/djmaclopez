document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is connected and running!");

    // Add Dark Mode Toggle Button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px";
    toggleButton.style.backgroundColor = "#0066cc";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "5px";
    toggleButton.style.cursor = "pointer";

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Add Greeting Based on Time of Day
    const greeting = document.getElementById("greeting");
    if (greeting) { // Check if greeting element exists
        const hour = new Date().getHours();

        if (hour < 12) {
            greeting.textContent = "Good Morning!";
        } else if (hour < 18) {
            greeting.textContent = "Good Afternoon!";
        } else {
            greeting.textContent = "Good Evening!";
        }
    } else {
        console.warn("Greeting element not found!");
    }
});
