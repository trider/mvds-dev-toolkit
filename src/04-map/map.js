/**
 * Generates a Map object with keys generated as "key0", "key1", "key2", and so on,
 * and values provided as arguments. It then logs each key-value pair to the console.
 * @param {...any} args - The values to be stored in the Map object.
 */

const mapGen = (...args) => {
 let map = new Map()
 args.map((value, index) => map.set(`key${index}`, value))
 map.forEach((value, key) => console.log(`${key} ${value}`))
}

mapGen(1,2,2,4,3,4,5,6,7,8,9,10)


module.exports = mapGen; // Do not remove. This allows the function to be imported by other modules








