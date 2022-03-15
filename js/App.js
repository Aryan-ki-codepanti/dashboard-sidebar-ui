// DOM elements
let arrow = document.querySelectorAll(".arrow");
let sidebar = document.querySelector(".sidebar"); 

for (const i of arrow) {
    i.addEventListener("click" , (e)=>{
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    });
}
console.log(sidebar);