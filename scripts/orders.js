import { addOrder, getOrders } from "./dataAccess.js"
import { getColors, getInteriors, getTechnologies, getWheels } from "./dataAccess.js"

const colors = getColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

let totalPrice = 0

// clcik event for "Place Car Order" Button
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton") {
            addOrder()
        }
    }
)

// get color name and price from colorId (using for...of loop)
const findColorId = (id) => {
    for (const color of colors) {
        if (color.id === id)
            return [color.bodyColor, color.price]
    }
}

// get interior interiorId (sample of using .find)
const findInterior = (id) => {
    const returnInterior = interiors.find(interior => {
        if (interior.id === id) { return true }
        return false
    })

    return returnInterior
}

// get technology version and price from technologyId (using .map)
const findTechnologyId = (id) => {
    let a, b
    technologies.map(technology => {
        if (technology.id === id)
            [a, b] = [technology.version, technology.price]
    })
    return [a, b]
}

// get wheel type and price from wheelId (using for...of loop)
const findWheelId = (id) => {
    for (const wheel of wheels) {
        if (wheel.id === id)
            return [wheel.type, wheel.price]
    }
}

// display ordered list from orders
export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    for (const order of orders) {
        // calculate Total Price
        const [colorName, colorPrice] = findColorId(order.colorId)
        const [technologyName, technologyPrice] = findTechnologyId(order.technologyId)
        const [wheelName, wheelPrice] = findWheelId(order.wheelId)

        const returnInterior = findInterior(order.interiorId)
        const interiorName = returnInterior.material
        const interiorPrice = returnInterior.price
       

        totalPrice = colorPrice + interiorPrice + technologyPrice + wheelPrice
        const totalPriceString = totalPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })

        // display order list
        html +=
            `<li>
            ${colorName} Car with ${wheelName} wheels, ${interiorName} interior, and the ${technologyName} for a total cost of ${totalPriceString}
        </li>`
    }

    html += "</ul>"

    return html
}

