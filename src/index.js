module.exports = function check(str, bracketsConfig) {
  const openBracket = ['(', '{', '[', '|', '1', '3', '5', '7', '8'];
  const bracketPair = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8'
  }
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i]
    if (openBracket.includes(currentSymbol) && currentSymbol !== stack[stack.length - 1]) {
      stack.push(currentSymbol)      
      } else {
        if (stack.length === 0) {
          return false;
        } 
          let topElement = stack[stack.length - 1]
          if (topElement !== '|' || topElement !== '7' || topElement !== '8'){
            stack.push(currentSymbol)
          
        }
        if (bracketPair[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
  }
  return stack.length === 0;
}
