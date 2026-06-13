// =======================================

// =======================
// LOCAL STORAGE FUNCTIONS
// =======================
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

// SELECT CONTAINER
// =======================================
const modal = document.getElementById("property-modal");
const modalDetails = document.getElementById("modal-details");
const closeBtn = document.querySelector(".close-btn");

const container = document.getElementById("listings-container");

// Show loading message
container.innerHTML = "<p>Loading properties...</p>";

// =======================================
// FETCH JSON DATA
// =======================================
async function getProperties() {
    try {
        const response = await fetch("data/properties.json");

        // Check if response is OK
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        displayProperties(data);

    } catch (error) {
        container.innerHTML = "<p>Failed to load properties. Please try again later.</p>";
        console.error("Error:", error);
    }
}

// =======================================
// DISPLAY PROPERTIES
// =======================================
function displayProperties(properties) {

    container.innerHTML = "";

    properties.forEach(property => {

        const card = document.createElement("div");
        card.classList.add("property-card");

        card.innerHTML = `
            <img src="images/${property.image}" 
                 alt="${property.name}" 
                 loading="lazy">

            <h3>${property.name}</h3>

            <p><strong>Location:</strong> ${property.location}</p>
            <p><strong>Price:</strong> ${property.price}</p>

            <button class="fav-btn" data-id="${property.id}">
                 Save
            </button>
        `;

        // =======================
        // FAVORITES LOGIC
        // =======================
        const favBtn = card.querySelector(".fav-btn");

        let favorites = getFavorites();

        if (favorites.includes(property.id)) {
            favBtn.textContent = " Saved";
        }

        favBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevents modal opening

            let favorites = getFavorites();

            if (favorites.includes(property.id)) {
                favorites = favorites.filter(id => id !== property.id);
                favBtn.textContent = " Save";
            } else {
                favorites.push(property.id);
                favBtn.textContent = " Saved";
            }

            saveFavorites(favorites);
        });

        // =======================
        // MODAL CLICK (keep yours)
        // =======================
        card.addEventListener("click", () => {
            modalDetails.innerHTML = `
                <img src="images/${property.image}" alt="${property.name}">
                <h2>${property.name}</h2>
                <p><strong>Location:</strong> ${property.location}</p>
                <p><strong>Price:</strong> ${property.price}</p>
                <p>${property.description}</p>
            `;

            modal.style.display = "block";
        });

        container.appendChild(card);
    });
}

// =======================================
// CALL FUNCTION
// =======================================
getProperties();

// Close when clicking X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});