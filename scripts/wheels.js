import { getWheels, setWheel } from "./dataAccess.js"

const wheels = getWheels()

export const Wheels = () => {
    let html = `<select id="wheel">`

    // Converting objects to <li> elements
    for (const wheel of wheels) {
            html +=
            `
                <option value="${wheel.id}">${wheel.type}</option>
            `
    }

    html += "</select>"

    return html
}

// ChangeEvent for wheel
document.addEventListener(
    "change",
    (event) => {
        const clickedItem = event.target
        if (clickedItem.id === "wheel") {
            setWheel(parseInt(clickedItem.value))

        }
    }
)