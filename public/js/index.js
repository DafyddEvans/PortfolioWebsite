

const iconSidebar = document.getElementById("icon-sidebar")
const sidebar = document.getElementById("sidebar")
const sidebarPTags = document.querySelectorAll(".lg-sidebar")
const sidebarIcons = document.querySelectorAll(".icon")

const footerIcons = document.querySelectorAll(".footer-icon")

const body = document.body
const home = document.getElementById("particles-js")
const about = document.getElementById("about")
const toAbout = document.getElementById("to-about")
const toHome = document.getElementById("to-home")

function colorPicker(className) {
    switch (className) {
        case "fa-github":
            return "#e6e3e3";

        case "fa-css3-alt":
            return "#e6e3e3";

        case "fa-html5":
            return "#e34c26";

        case "fa-js-square":
            return "#f7df1e";

        default:
            return "";
    }
}

function getElement(name) {
    switch (name) {
        case "Home":
            return document.getElementById("particles-js");
        
        case "About Me":
            return document.getElementById("about");

        case "Projects":
            return document.getElementById("projects");
        
        case "Contact Me":
            return document.getElementById("contact");
        
        default:
            return "";
    }
}



sidebar.addEventListener("mouseover", () => {
    sidebarPTags.forEach( (element) => {
        element.style.display = ""
    }) 
})

sidebar.addEventListener("mouseout", () => {
    sidebarPTags.forEach( (element) => {
        element.style.display = "none"
    })
})

// Hover for all sidebar icons
sidebarIcons.forEach( (icon) => {
    icon.addEventListener("click", () => {
        const iconInner = icon.getElementsByTagName("p")[0].getInnerHTML()
        const scrollTo = getElement(iconInner)
        scrollTo.scrollIntoView({behavior: "smooth"})
    })
})




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
        inner[0].style=""
        icon.style=""
    })
})

toHome.addEventListener("click", () => {
    home.scrollIntoView({behavior: "smooth"})
})

toAbout.addEventListener("click", () => {
    about.scrollIntoView({behavior: "smooth"})
})



let elements
let windowHeight

function init() {
    elements = document.querySelectorAll('.container');
    windowHeight = window.innerHeight;
}

function checkPosition() {
    init()
    let elementArray = []
    elements.forEach( (element) => {
        var positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.remove('container')
            elementArray.push(element)
        }
    })
    if (elementArray.length > 0) {
        fadeIn(elementArray)
    }
    elementArray = []
}

function fadeIn(elementArray) {
    console.log("called")
    elementArray.forEach( (element, index) => {
        setTimeout(function () {
            element.classList.add('fade-in-element')
            element.classList.remove('fade')
        }, index * 200)
    })
}

window.addEventListener('scroll', checkPosition)
window.addEventListener('resize', init)

init()
checkPosition()




// Show / Close Modals
const projects = document.querySelectorAll(".project")
const modals = document.querySelectorAll(".modal")

projects.forEach( (project) => {
    project.addEventListener("click", () => {
        const id = project.getElementsByTagName("h1")[0].innerHTML
        const modal = document.getElementById(id)

        modal.style.display = "block"
        body.style.height = "100vh"
        body.style.overflowY = "hidden"

    })
})

modals.forEach( (modal) => {
    const btn = modal.getElementsByTagName("span")[0]

    modal.addEventListener("click", (event) => {
        if (event.target == btn || event.target == modal) {
            modal.style.display = "none";
            body.style.height = ""
            body.style.overflowY = ""
        }
    })
})