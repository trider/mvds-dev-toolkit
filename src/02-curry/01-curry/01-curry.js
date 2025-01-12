const curryAdd = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  }
  
}


// Usage
// const result = curryAdd(1)(2)(3); // 6
// console.log(result); // Outputs: 6

module.exports = curryAdd; // Do not remove. This allows the function to be imported by other modules
