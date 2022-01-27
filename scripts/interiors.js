import { getInteriors, setInterior } from "./dataAccess.js"

const interiors = getInteriors()

export const Interiors = () => {
    let html =
    `<select id="interior">`

    // Converting objects to <li> elements
    for (const interior of interiors) {
        if (interior.material === "Black Leather") {
            html +=
            `<option selected value="${interior.id}">${interior.material}</option>`
        } else {
            html +=
            `
                <option value="${interior.id}">${interior.material}</option>
            `
        }
    }

    html += "</select>"

    return html
}

// ChangeEvent for interior
document.addEventListener(
    "change",
    (event) => {
        const clickedItem = event.target
        if (clickedItem.id === "interior") {
            setInterior(parseInt(clickedItem.value))

        }
    }
)