const spotlightContainer = document.getElementById("spotlight-container");

async function getSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const data = await response.json();

        // STEP 1: Filter Gold (3) and Silver (2)
        const qualified = data.filter(member =>
            member.membership === 3 || member.membership === 2
        );

        // STEP 2: Shuffle randomly
        const shuffled = qualified.sort(() => 0.5 - Math.random());

        // STEP 3: Pick 2–3 members
        const selected = shuffled.slice(0, 3);

        spotlightContainer.innerHTML = "";

        selected.forEach(member => {

            // Convert number → text
            const level =
                member.membership === 3 ? "Gold" : "Silver";

            const card = document.createElement("div");
            card.classList.add("spotlight-card");

           const levelClass =
               member.membership === 3 ? "gold" : "silver";

           card.innerHTML = `
               <div class="card-header ${levelClass}">
                   <img src="images/${member.image}" alt="${member.name}">
                   <h3>${member.name}</h3>
               </div>

               <div class="card-body">
                   <p class="tagline">${member.tagline}</p>
                   <p>${member.address}</p>
                   <p>${member.phone}</p>
                   <a href="${member.website}" target="_blank">Visit Website</a>
               </div>

               <div class="card-footer ${levelClass}">
                   ${member.membership === 3 ? "Gold Member" : "Silver Member"}
               </div>
           `;

            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Spotlight error:", error);
    }
}

getSpotlights();