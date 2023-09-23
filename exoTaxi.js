"use strict"


let santeMentale = 10;
let nbrFeurouge = 30;
let musique = ["Anissa-wejdene" , "Tragédie-Hey ho" , "Aqua-barbie girl" , "Michel Sardou - Les lacs du Connemara" ,"Blue-Eiffel 65"];
let musiqueAleatoire;

function choixMusique(){
    let musiqueAleatoire = Math.floor(Math.random() * 5);
    return musiqueAleatoire;
}


while (santeMentale > 0 && nbrFeurouge > 0){
    musiqueAleatoire=musique[choixMusique()];
    console.log("jhon a écoute la musique"+musiqueAleatoire+" et sa santé actuelle est de "+santeMentale+" point")
    if (musiqueAleatoire == "Anissa-wejdene"){
        santeMentale -=1;
    }
    nbrFeurouge--;
}    
   
   if (santeMentale<=0){
    console.log("Jhon vient d'exploser car sa santé mentale a atteint 0")
   }else{
    console.log("Jhon a reussit a rentrer chez lui avec "+santeMentale+" point mentale")
   }

   console.log("Nombre de feu rouge restant :" +nbrFeurouge);


  