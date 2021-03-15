//1
function fozzieBear() {
    console.log("Wocka Wocka!");
}
fozzieBear();

console.log("============");

//2
function beaker(speak){
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    
}
beaker(`Meep`);

console.log("=============");

//3
function werewolf(a, b){
    if(a = "Muppet", b = "Show"){
        console.log("It's time to play the music. It's time to light the lights.");
    }
}
werewolf(); 

console.log("================");


//4
function Kermit() {
    console.log("Kermit the Frog");
}
Kermit();

console.log("================");

//5
//I cannot 
function muppetShowSeasons(seasons = `5`){
    if(seasons = 5){
        return`true`;
    }
    return `false`;
    
}
console.log(muppetShowSeasons(true));
console.log(muppetShowSeasons(false));

console.log("===========");

//6
const muppets = [
    "Kermit The Frog",
    "Miss Piggy",
    "Fozzie Bear",
    "The Great Gonzo"
];

console.log("===============");

//6b
function showMuppets(names){
    console.log(`${muppets[0]}`);
    console.log(`${muppets[1]}`);
    console.log(`${muppets[2]}`);
    console.log(`${muppets[3]}`);
}
showMuppets();

console.log("================");

//7
const manOrMuppet = function(){
    console.log("Am I a man or am I a Muppet?");
}
manOrMuppet();

console.log("==============");

//8

let rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers, and me";
console.log("");
rainbowConnection();

//9
//no

//10
//no

//11a
const newMuppetMovies = [
    `The Muppet Movie`,
    `The Muppets Take Manhattan`,
    `The Great Muppet Caper`,
    `Muppets From Space`
];
