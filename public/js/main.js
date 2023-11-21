const healthLink = document.getElementById("health")
const lookupLink = document.getElementById("lookup")
const homeLink = document.getElementById("home")

const pageNav = function (event) {
    const selection = { id: event.target.id }
    console.log("target id: ", selection)
    console.log("target id: ", selection.id)
    const selected = selection.id
    if (selected === "home"){
        console.log("hit home")
        location.replace("/")
    } else if (selected === "lookup"){
        console.log("hit lookup")
        location.replace("/lookup")
    } else if (selected === "health"){
        console.log("hit health")
        location.replace("/health")
    } else {
        console.log("There is no location assigned to that link")
    }
}

healthLink.addEventListener("click", pageNav)
lookupLink.addEventListener("click", pageNav)
homeLink.addEventListener("click", pageNav)