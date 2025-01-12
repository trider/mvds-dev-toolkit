/**
 * Generates a Set and adds the provided values to it.
 * @param {...any} args - The values to be added to the Set.
 */

const setGen = (...args) => {
 const set = new Set()
 args.map((value, index) => set.add(value))
 set.forEach((value) => console.log(value))
 return set.size

}

const val = setGen(1,2,3,4,5,6,7,8,9,10,10)
console.log(val)

module.exports = setGen;