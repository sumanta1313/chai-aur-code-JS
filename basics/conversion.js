let score = "55" 

console.log(typeof score);


// now we can see the difference, it's now datatype conversion
let numberInScore = Number(score)
console.log(typeof numberInScore);



let n = "55abc" // we know it's not a number
console.log(typeof n);

// now here is a problem 
let num = Number(n) //we try to convert the string into number 
console.log(typeof num); // it show that it conevert to the nunber 
console.log(num); //but if we check the value it show NaN[not a number]

// another one 
let a = null
console.log(a);
console.log(typeof a); // null is object type so the output will be null

let b = Number(a)
console.log(b);
console.log(typeof b); // but here the null convert into number then it show 0 rether null and type is number 



// another one is 
let x = undefined
console.log(x); //first it show undefined 
console.log(typeof x); // type is also undefined

let z = Number(x)
console.log(z); // it show NaN
console.log(typeof z); // it show number


let k = true
console.log(k); // output -> ture 
console.log(typeof k); // the type of this boolean

let j = Number(k)
console.log(j); // and its shows 1 if true 0 if false
console.log(typeof j); // it show number 



let loggedIn = 0

let boologged = Boolean(loggedIn)
console.log(boologged);

// what if ?
let logged = "sumanta" // black return false ohterwise true

let boolog = Boolean(logged)
console.log(boolog); // output -> ture


let some = 55
console.log( typeof some); // number type 

let string = String(some)
console.log(string); // output well be 55 but
console.log(typeof string); // string

