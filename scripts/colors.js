import { getColors, setColor } from "./dataAccess.js"

const colors = getColors()

export const Colors = () => {
    let html = `<select id="color">`

    // Converting objects to <li> elements
    for (const color of colors) {
            html +=
            `
                <option value="${color.id}">${color.bodyColor}</option>
            `
    }

    html += "</select>"

    return html
}

// ChangeEvent for color
document.addEventListener(
    "change",
    (event) => {
        const clickedItem = event.target
        if (clickedItem.id === "color") {
            setColor(parseInt(clickedItem.value))

        }
    }
)