import { Cars } from "./cars.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Cars()
}

renderAllHTML()

// Regenerate HTML state changed
document.addEventListener("stateChanged", event => {
    renderAllHTML()
})

