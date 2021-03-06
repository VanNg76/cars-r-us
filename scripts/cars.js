import { Colors } from "./colors.js"
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./orders.js"

// generate application HTML
export const Cars = () => {
    return `
        <h1>Cars 'R Us</h1>
        
        <article class="choices">
            <section class="choices__color options">
                <h2>Colors</h2>
                ${Colors()}
            </section>
            <section class="choices__color options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__color options">
                <h2>Technologies</h2>
                ${Technologies()}
            </section>
            <section class="choices__color options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="orders">
            <h2>Car Orders</h2>
            ${Orders()}
        </article> 
        
        `
}

            
