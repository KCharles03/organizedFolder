 //  count from 1-5 and add 6
 const num = ['1','2','3','4','5']
 num.push('6')
 console.log(num)


console.log('-------------------------------------------------')

// add the number 3 using .push
const number = ['1','2']
number.push('3')
console.log(number)


console.log('-------------------------------------------------')

//add the word toe to tic tac toe using .push
const phrase = ['tic', 'tac']
phrase.push('toe')
console.log(phrase)


console.log('-------------------------------------------------')

//remove the last element in array using .pop
const groceryCart = ["ham","cheese","bagel","coffee beans"]
groceryCart.pop()
console.log(groceryCart)

console.log('-------------------------------------------------')

// remove the last soda using .pop
const drinks = ['coke','pepsi','sprite','dr.pepper']
drinks.pop()
console.log(drinks)


console.log('-------------------------------------------------')
//remove the first person in the array using .shift 

const people = ['keren','danielle','jamie','emil']
people.shift()
console.log(people)

console.log('-------------------------------------------------')
// Find the smallest number in the array

const smallestNumber = [1,24,5,8,9,90,0]
console.log(Math.min(...smallestNumber))

console.log('-------------------------------------------------')
// Find the largest number in the array
const largestNumber = [80,1,4,6,7,0,100,120]
console.log(Math.max(...largestNumber))
