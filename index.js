let a = Number(prompt('enter a first number : '));
let b = Number(prompt('enter a second nmber : '));
if(isNaN(a)||isNaN(b)){
  throw SyntaxError('this is unvalid');
  
}
let sum = Number(a+b)
alert(`ur to tal is ${sum}`)

try {
  console.log('try to multiply ',a*x);
  
} catch (error) {
  console.log('Error of ')
  
}