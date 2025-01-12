function towerBuilder(nFloors) {
  const rows = [];
  for (let i = 1; i <= nFloors; i++) {
      rows.push(" ".repeat(nFloors - i) + "*".repeat(2 * i - 1) + " ".repeat(nFloors - i));
  }

  
  
  return rows.map((row) => row).join("\n");

}

console.log(towerBuilder(1));

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));

module.exports = towerBuilder;