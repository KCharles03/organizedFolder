
//find out how many colors are in the array

const colors =["color","food","food","color","color","food"]
let theColors = 0;
for(let c = 0; c <colors.length; c++){
    if(colors[c] === "color"){
        theColors++;
    }
}
console.log(theColors)

console.log('-----------------------------')

//find out how many truths are in the array

const findTrue = [true,true,false,true,false,false]
let theTrue = 0;
for(let t = 0; t< findTrue.length; t++){
    if(findTrue[t]===true){
        theTrue++;
    }
}
console.log(theTrue)

console.log('-----------------------------------')


  //write a Js function to get all the index of an array

  let flavors = ["vanilla", "strawberries", "chocolate"]

  function getFlavors(){
  for(let f=0; f<flavors.length; f++)
      console.log(f)
  }
  getFlavors()

  console.log('-----------------------------------')
  // find the index of this array
  
  let sneakerBrands =['nike','jordans','uggs','adidas']
  function getBrands(){
      for(let s =0;s<sneakerBrands.length; s++)
      console.log(`the index numbers of this array is ${s}`) 
  }
  getBrands()
  
  
  console.log('-----------------------------------')

  