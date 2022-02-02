// First, tell us your name
let yourName = "Jennika Wilson" 

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Total

let qtyTotal =  document.querySelector('#qty-total')

//Credit
const credit = document.querySelector('#credit')

//Ginger Bread up
const gbPlusBtn = document.querySelector('#add-gb')
gbPlusBtn.addEventListener('click', function(){
    gb = gb += 1
    gbChange(`${gb}`)

    //Changing total displayed up
    total += 1
    qtyTotal.textContent = total
})

//Ginger Bread down
const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function(){
    if(gb > 0){
        gb = gb -= 1
    }
    gbChange(`${gb}`)

    //Changing total displayed down
    if (total > 0){
        total = total -= 1
    }
    qtyTotal.textContent = total
})

//Change Ginger Bread quantity displayed
function gbChange(gbDisplay){
    let gb = document.querySelector('#qty-gb')
    gb.textContent = gbDisplay
}

//Chocolate Chip up
const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function(){
    cc = cc += 1
    ccChange(`${cc}`)
    
    //Changing total displayed up
    total += 1
    qtyTotal.textContent = total
})

//Chocolate Chip down
const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function(){
    if(cc > 0){
        cc = cc -= 1
    }
    ccChange(`${cc}`)
    
    //Changing total displayed down
    if (total > 0){
        total = total -= 1
    }
    qtyTotal.textContent = total
})

//Change Chocolate Chip quantity displayed
function ccChange(ccDisplay){
    let cc = document.querySelector('#qty-cc')
    cc.textContent = ccDisplay
}

//Sugar Sprinkle up
const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function(){
    sugar = sugar += 1
    sugarChange(`${sugar}`)

   //Changing total displayed up
   total += 1
  qtyTotal.textContent = total 
})

//Sugar Sprinkle down
const suguarMinusBtn = document.querySelector('#minus-sugar')
suguarMinusBtn.addEventListener('click', function(){
    if(sugar > 0){
        sugar = sugar -= 1
    }
    sugarChange(`${sugar}`)

      //Changing total displayed down
      if (total > 0){
        total = total -= 1
    }
    qtyTotal.textContent = total
})

//Change Sugar Sprinkle displayed
function sugarChange(sugarDisplay){
    let sugar = document.querySelector('#qty-sugar')
    sugar.textContent = sugarDisplay
}

// Code to update name display
credit.textContent = `Created by ${yourName}`