const navList = document.querySelector("#navbar__list");
const sections = Array.from(document.querySelectorAll("section"))


function createListItem() {
    for (sec of sections) {
        listItem = document.createElement("li")
        listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a></li>`;
        navList.appendChild(listItem)
    }
}
createListItem()

// For the active states
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active) {
        let activeLink = navList.querySelector(`[data-nav=${active.id}]`);
        if (active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150) {
            active.classList.add("your-active-class");
            activeLink.classList.add("active-link");
        } else {
            active.classList.remove("your-active-class");
            activeLink.classList.remove("active-link");
        }
    });
}


// For Scrolling Smooth
// There is another way by using css code "html{scroll-behavior: smooth;}"
navList.addEventListener("click", (Sec) => {
    Sec.preventDefault();
    if (Sec.target.dataset.nav) {
     const element = document.getElementById(`${Sec.target.dataset.nav}`)
     element.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            location.hash = `${Sec.target.dataset.nav}`;
        }, 120);
    }
});



const header = document.querySelector(".page__header");

let scrolling;
document.onscroll = () => {
    header.style.display = "block";
    clearTimeout(scrolling)
    scrolling = setTimeout(() => {
        header.style.display = "none";
    }, 4200)
}

