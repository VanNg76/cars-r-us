import { getTechnologies, setTechnology } from "./dataAccess.js"

const technologies = getTechnologies()

export const Technologies = () => {
    let html = `<select id="technology">`

    // Converting objects to <li> elements
    for (const technology of technologies) {
            html +=
            `
                <option value="${technology.id}">${technology.version}</option>
            `
    }

    html += "</select>"

    return html
}

// ChangeEvent for techonology
document.addEventListener(
    "change",
    (event) => {
        const clickedItem = event.target
        if (clickedItem.id === "technology") {
            setTechnology(parseInt(clickedItem.value))

        }
    }
)