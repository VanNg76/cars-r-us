import { database } from "./database.js"

let orderBuilder = {
    colorId: 1,
    interiorId: 4
}

// export data tables
export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

// store id of chosen Item into orderBuilder{}
export const setColor = (id) => {
    orderBuilder.colorId = id
}

export const setInterior = (id) => {
    orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    orderBuilder.wheelId = id
}

// Store customer's choices permanently into database
export const addOrder = () => {
    // Copy the current state of user choices
    let newOrder = {...orderBuilder}

    // Add a new primary key to the object
    if (database.orders.length === 0) {
        newOrder.id = 1
    } else {
        const lastIndex = database.orders.length - 1
        newOrder.id = database.orders[lastIndex].id + 1     /*make sure if some orders in betwen has been cancelled*/
    }
    
    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    orderBuilder = {
        colorId: 1,         /*default value of Color*/
        interiorId: 4       /*default value or Interior*/
    }

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

