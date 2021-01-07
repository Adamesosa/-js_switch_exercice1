//1 
let jSemaine = prompt('Le jour de la semaine?').toLowerCase();

switch (jSemaine) {
    case "lundi": case "mardi": case "mercredi" :
        console.log(`${jSemaine} MolenGeek`);
        break;
    case "jeudi": case "vendredi":
        console.log(`${jSemaine} elearning`);
        break;
    case "samedi": case "dimanche":
        console.log('maison');
        break;
    default:
        console.log('Error, reconnais pas le jour');
        break;
}

// 2

let age = parseInt(prompt('Entrez votre âge?'));

switch (isNaN(age)) {
    case true:
        console.log(`Error n'est pas un nombre`);
        break;
    case false:
        switch (age >=18 ) {
            case true:
                console.log("Il a plus de 18ans");
                break;
            case false:
                console.log("ll a moins de 18ans");
        }
        break;
}