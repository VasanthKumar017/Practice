let dis = document.getElementById("count-el");

let count = 0;
console.log(count);

 let myAge =21;
// console.log(myAge);
let humanDogRatio=7;
let myDogAge=myAge*humanDogRatio;
console.log(myDogAge);

function increment(){

    count+=1;
    console.log(count);
dis.innerHTML=count;

}
let pe = document.getElementById("save-el");
function save(){
    let a=count+" - ";

    pe.textContent+=a;

    count=0;

dis.textContent=count;


}