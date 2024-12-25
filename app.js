

let modeBtn = document.querySelector("#mode");
let heading = document.querySelector("#heading");
let description = document.querySelector("#description");

let curMode = "light"; // Initial mode
modeBtn.addEventListener("click", () => {
    if (curMode === "light") {
        curMode = "dark";

        // Change to dark mode
        document.body.style.backgroundColor = "#2c3e50"; // Dark background
        document.body.style.color = "#ecf0f1"; // Light text
        modeBtn.style.backgroundColor = "#e74c3c"; // Red button
        modeBtn.textContent = "Switch to Light Mode"; // Update button text

        // Update text and animation
        heading.textContent = "Welcome to Dark Mode!";
        description.textContent = "You are now in Dark Mode. Click the button to switch back.";
        heading.classList.add("fade-in");
        modeBtn.classList.add("spin");
    } else {
        curMode = "light";

        // Change to light mode
        document.body.style.backgroundColor = "#f4f4f4"; // Light background
        document.body.style.color = "#2c3e50"; // Dark text
        modeBtn.style.backgroundColor = "#4CAF50"; // Green button
        modeBtn.textContent = "Switch to Dark Mode"; // Update button text

        // Update text and animation
        heading.textContent = "Welcome to Light Mode!";
        description.textContent = "You are now in Light Mode. Click the button to switch back.";
        heading.classList.add("fade-in");
        modeBtn.classList.add("spin");
    }

    // Remove animations after they finish
    setTimeout(() => {
        heading.classList.remove("fade-in");
        modeBtn.classList.remove("spin");
    }, 1000); // Matches the duration of animations
});

