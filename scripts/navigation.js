const menuBtn = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
});