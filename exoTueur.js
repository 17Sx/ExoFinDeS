"use strict"


const caracteristiques = ["nerd", "sportif", "blond(e)", "brun(e)", "courageux(se)"];


function nomAleatoire() {
    const prenoms = ["Thomas", "Dany", "Charlie", "Julien", "Noa"];
    return prenoms[Math.floor(Math.random() * prenoms.length)];
}
function attaquerTueur() {
    return Math.random() < 0.3; 
}

function attaquerSurvivant() {
    const esquive = Math.random() < 0.5; 
    if (esquive) {
        return 10; 
    } else {
        const mourir = Math.random() < 0.2; 
        if (mourir) {
            return -15; 
        } else {
            return 0; 
        }
}
}

function messageFin(message) {
    console.log(message);
}

const survivants = [];
for (let i = 0; i<5; i++) {
    const nom = nomAleatoire();
    const caracteristique = caracteristiques[Math.floor(Math.random() * caracteristiques.length)]; //Utilisation de chatgpt car je savais pas comment faire et ducoup il ma donné "Math.floor"
    survivants.push({ nom, caracteristique}); //Utilisation de chatgpt pour connaitre comment inserer un elements dans le tableau
}
let vieTueur = 100;

while (vieTueur > 0 && survivants.length > 0) {
    messageFin("\nTour suivant :");           //Utilisation de chatpt pour sauter des lignes avec le /n parceque je connaissais pas
    for (let i = 0; i < survivants.length; i++) {
        const survivant = survivants[i];
        messageFin(`Survivant : ${survivant.nom} le/la ${survivant.caracteristique}`);
        const degats = attaquerSurvivant();
        if (degats < 0) {
            messageFin(`${survivant.nom} inflige 15 points de dégâts a jason mais meurt.`);
            survivants.splice(i, 1);     //utilisation de chatgpt pour enlever des elements du tableau parceque je ne m'en souvenais/connaissais pas
            i--;
        } else if (degats > 0) {
            messageFin(`${survivant.nom} inflige 10 points de degats a jason.`);
            vieTueur -= 10;
        } else {
            messageFin(`${survivant.nom} esquive l'attaque de Jason.`);
    }
}
     if (attaquerTueur()) {
        messageFin("Le tueur Jason est mort");
        break;
    }
}

messageFin("\nSurvivants morts :");
for (const survivant of survivants) { //utilisation de chat gt pour avoir une boucle 
    messageFin(`${survivant.nom} (${survivant.caracteristique}) est mort dans d'atroce souffrance `);
}


if (vieTueur <= 0) {
    messageFin("\nLes survivants ont reussi à tuer Jason !");
} else {
    messageFin("\nLe tueur Jason a reussi à s'échapper. RIP au survivants decédée");
}
