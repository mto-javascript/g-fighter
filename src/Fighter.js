const MAX_LIFE = 100

/* Fighter class definition */
class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name
        this.strength = strength
        this.dexterity = dexterity
        this.life = MAX_LIFE
    }

    fight(fighter) {
        const attack = Math.round(Math.random() * this.strength + 1);
        const degat = (attack - fighter.dexterity > 0) ? attack - fighter.dexterity : 0
        fighter.life = (fighter.life - degat > 0) ? fighter.life - degat : 0
        console.log(`${this.name} 🗡️ (${attack}) ${fighter.name} , cause ${degat} degats | ${fighter.name} HP: ${fighter.life}`)
    }

    isAlive() {
        return this.life > 0 ? true : false
    }
}

// Exporting functions or variables
module.exports = {
    Fighter
};