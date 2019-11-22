var nombreAleatoire = Math.random()*100;
nombreAleatoire = Math.floor(nombreAleatoire); // document.write(nombreAleatoire);
console.log("mon nombre aléatoire est "+nombreAleatoire);

var boutonValider = document.getElementById('boutonValider');
var divRetourNombre0 = document.getElementById('divRetourNombre0');
var divRetourNombre1 = document.getElementById('divRetourNombre1');
var divRetourCommentaire = document.getElementById('divRetourCommentaire');
divRetourCommentaire.style.color = "brown";
var divDecompte = document.getElementById('divDecompte');
var divRejouer = document.getElementById('divRejouer');
var divBoutons = document.getElementById('boutons');
var boutonOui = document.getElementById('boutonOui');

var coups = 0;
var nombreEssai = 10;

function jouer () {

        boutonValider.addEventListener('click', function () {
        var contenuInput = document.getElementById('contenuInput').value;
        var nombreTest = parseInt(contenuInput);
        console.log("mon contenuInput est " + contenuInput);

        nombreEssai--;
        coups++;

        if (nombreEssai>0){

            if (nombreTest === nombreAleatoire && nombreEssai>0 && nombreEssai<=10) {
                divRetourNombre0.innerHTML += "Le nombre mystère est "+nombreAleatoire+".";
                divRetourNombre1.innerHTML += ' ' + nombreTest + ', ';
                divRetourCommentaire.innerHTML = "Bravo, tu as trouvé en "+coups+" coup(s)!";
                divDecompte.innerHTML = "";
                divRejouer.innerHTML = "Veux-tu rejouer?";
                divBoutons.style.visibility = 'visible';
                boutonValider.style.visibility='hidden';
            }

            else if (nombreTest > nombreAleatoire && nombreEssai>0 && nombreEssai<=10) {
                divRetourNombre1.innerHTML += ' ' + nombreTest + ', ';
                divRetourCommentaire.innerHTML = "Le nombre mystère est plus petit.";
                divDecompte.innerHTML = "Il te reste "+nombreEssai+" essai(s).";
            }

            else if (nombreTest < nombreAleatoire && nombreEssai>0 && nombreEssai<=10) {
                divRetourNombre1.innerHTML += ' ' + nombreTest + ', ';
                divRetourCommentaire.innerHTML = "Le nombre mystère est plus grand.";
                divDecompte.innerHTML = "Il te reste "+nombreEssai+" essai(s).";
            }
        }

            else {
                divRetourNombre1.innerHTML += ' ' + nombreTest + ', ';
                divRetourCommentaire.innerHTML = "Le nombre mystère est "+nombreAleatoire+".";
                divDecompte.innerHTML = "Il ne te reste aucun essai.Tu as perdu.";
                divRejouer.innerHTML = "Veux-tu rejouer?";
                divBoutons.style.visibility = 'visible';
                boutonValider.style.visibility='hidden';
            }
    });

}
jouer();

function rejouer (){
    boutonOui.addEventListener('click', function () {
        console.log('boutonOui');

            location.reload();

           });
}

rejouer();

