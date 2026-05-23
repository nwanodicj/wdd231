// ===== SELECT ELEMENTS =====
const directory = document.querySelector("#directory");
const gridBtn = document.querySelector("#gridView");
const listBtn = document.querySelector("#listView");
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

// ===== FETCH MEMBERS =====
async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data);
}

// ===== DISPLAY MEMBERS =====
function displayMembers(members) {
    directory.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
           <img src="images/${member.image}" alt="${member.name} logo">
           <div class="card-info">
               <h3>${member.name}</h3>
               <p>${member.tagline}</p>
               <p><strong>Address:</strong> ${member.address}</p>
               <p><strong>Phone:</strong> ${member.phone}</p>
               <p><a href="${member.website}" target="_blank">Visit Website</a></p>
           </div>
        `;

        directory.appendChild(card);
    });
}

// ===== GRID / LIST TOGGLE =====
gridBtn.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
});

// ===== HAMBURGER MENU =====
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// ===== FOOTER DATES =====
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// ===== INIT =====
getMembers();