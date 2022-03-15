// DOM elements
let arrow = document.querySelectorAll(".arrow");
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");

for (const i of arrow) {
    i.addEventListener("click", e => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}

sidebarBtn.addEventListener("click", e => {
    sidebar.classList.toggle("close");
});
