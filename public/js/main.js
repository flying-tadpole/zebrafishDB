const healthLink = document.getElementById("health")
const lookupLink = document.getElementById("lookup")
const homeLink = document.getElementById("home")

const pageNav = function (event) {
    const selected = { id: event.target.id }
    if (id === "home"){
        console.log("hit home")
        location.replace("/")
    } else if (id === "lookup"){
        console.log("hit lookup")
        location.replace("/lookup")
    } else if (id === "health"){
        console.log("hit health")
        location.replace("/health")
    } else {
        console.log("There is no location assigned to that link")
    }
}

healthLink.addEventListener("click", pageNav)
lookupLink.addEventListener("click", pageNav)
homeLink.addEventListener("click", pageNav)