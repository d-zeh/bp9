/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jaimeLannisterAttack = 35

if(jonSnowAttack > jaimeLannisterAttack) {
    console.log(`Jon's attack is greather than Jaime's`)
} else if(jaimeLannisterAttack > jonSnowAttack) {
    console.log(`Jaime's attack is greater`)
} else {
    console.log(`its a tie`)
}