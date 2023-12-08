// First Labour : Heracles vs Nemean Lion
// use your Figher class here

// import { Fighter } from "./src/Fighter.js";
const {Fighter} = require('./src/Fighter.js')

const Heracles = new Fighter('🧔 Heracle', 20, 6)
const Nemean = new Fighter('🦁 Namean Lion', 11, 13)

// console.log(Heracles.fight(Nemean))
// console.log(Nemean.life, ' -hp')

let round = 0
while (Heracles.life !== 0 && Nemean.life !==0) {
    console.log(`--------------------------------------------`)
    console.log(`Round ${round++}`)
    Heracles.fight(Nemean)
    Nemean.fight(Heracles)
}

console.log(`--------------------------------------------`)
console.log(`${Heracles.isAlive ? Heracles.name : Nemean.name} est le survivant !`)