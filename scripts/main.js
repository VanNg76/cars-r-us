import { Cars } from "./cars.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Cars()
}

renderAllHTML()