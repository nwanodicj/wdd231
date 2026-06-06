// =======================================
// IMPORT DATA FROM MODULE FILE (.mjs)
// =======================================
import { places } from "../data/discover.mjs";

// =======================================
// SELECT CONTAINER
// =======================================
const container = document.getElementById("discoverContainer");

// =======================================
// LOOP THROUGH DATA AND CREATE CARDS
// =======================================
places.forEach((place, index) => {

    const card = document.createElement("div");
    card.classList.add("discover-card");

    // Assign grid area dynamically (REQUIRED for grid-template-areas)
    card.style.gridArea = `card${index + 1}`;

    // Build card content (REQUIRED structure)
    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="images/${place.image}" alt="${place.name}" loading="lazy">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
    `;

    container.appendChild(card);
});


// =======================================
// VISIT MESSAGE USING LOCAL STORAGE
// =======================================
const message = document.getElementById("visitMessage");

// Get stored visit time
const lastVisit = localStorage.getItem("lastVisit");

// Current time in milliseconds
const now = Date.now();

if (!lastVisit) {
    // First visit
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {

    // Calculate difference in days
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${days} days ago.`;
    }
}

// Save current visit
localStorage.setItem("lastVisit", now);