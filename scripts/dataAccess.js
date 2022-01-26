import { database } from "./database.js"

let orderBuilder = {}

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

// create function to add Orders into database
