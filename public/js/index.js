
const home = document.getElementById("particles-js")
const largeSidebar = document.getElementById("large-sidebar")
const iconSidebar = document.getElementById("icon-sidebar")
const sidebar = document.getElementById("sidebar")
const about = document.getElementById("about")
const footerIcons = document.querySelectorAll(".icon")
const toAbout = document.getElementById("to-about")
const toHome = document.getElementById("to-home")

console.log(sidebar)
sidebar.addEventListener("mouseover", () => {
    console.log(sidebar.getElementsByTagName("div")[0].innerText)
    sidebar.classList.toggle("lg-sidebar")
    largeSidebar.style.display = "block"
    iconSidebar.style.display = "none"
})

sidebar.addEventListener("mouseout", () => {
    sidebar.classList.toggle("lg-sidebar")
    largeSidebar.style.display = "none"
    iconSidebar.style.display = "block"
})

function colorPicker(className) {
    switch (className) {
        case "fa-github":
            return "#e6e3e3";

        case "fa-html5":
            return "#e34c26";

        case "fa-css3-alt":
            return "#e6e3e3";

        case "fa-js-square":
            return "#f7df1e";

        default:
            return "";
    }
}

footerIcons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
        const inner =  icon.getElementsByTagName("i")
        inner[0].style.color=colorPicker(inner[0].classList[1])
        icon.style.backgroundColor="#1768ac"
    })
})

footerIcons.forEach((icon) => {
    icon.addEventListener("mouseout", () => {
        const inner =  icon.getElementsByTagName("i")
        inner[0].style="";
        icon.style=""
    })
})

toHome.addEventListener("click", () => {
    home.scrollIntoView({behavior: "smooth"});
})

toAbout.addEventListener("click", () => {
    about.scrollIntoView({behavior: "smooth"});
})