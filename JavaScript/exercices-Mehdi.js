//EXO 1

//Créez un tableau stocké dans une variable “list” contenant les valeurs “peaches”, “apples” et “orange”.

//La fonction addItem reçoit en argument un tableau. Complétez la fonction afin qu’elle puisse ajouter l’élément “blueberries” à la fin du tableau et renvoyer le tableau modifié.

//La fonction deleteItem reçoit en argument un tableau. Complétez la fonction afin qu’elle puisse supprimer le premier élément du tableau et renvoyer le tableau modifié.

//La fonction editItem reçoit en argument un tableau. Complétez la fonction afin qu’elle puisse remplacer l’élément à l’index 1 du tableau par “bananas” et renvoyer le tableau modifié.

//Créez un objet dans la variable “contact” contenant une propriété “name” avec la valeur “Veronica Mars”, une propriété “email” avec la valeur “veronica@marsinvestigations.io” et une propriété “phone” avec la valeur “+33774765600”.

//La fonction getName reçoit en argument un objet avec une propriété “name”. Modifiez la fonction afin de renvoyer seulement la valeur stockée dans la propriété name.

//La fonction setName reçoit en argument un objet et un nouveau nom. Modifiez la fonction afin qu’elle puisse ajouter une propriété “name” à l’objet avec la valeur “John”.

//La fonction updateQuantity reçoit en argument un tableau avec une liste de courses et leurs quantités souhaitées. Modifiez la fonction afin qu’elle mette à jour la quantité de l’élément à l’index 2 avec la valeur 6.


/* EXO 2 :

Un palindrome est un texte ou un mot dont l'ordre des lettres reste le même, qu'on le lise de gauche à droite ou de droite à gauche.
Le but de ce challenge est de trouver parmi les différents mots d’un tableau ceux qui ne sont pas des palindromes.
La liste de mots reçue en paramètre et la liste finale des palindromes seront en majuscule.

Complétez la fonction getPalindromes pour qu’elle retourne une liste des palindromes issue du tableau de chaine de caractères "words" reçu en paramètre.La liste des palindromes renvoyée devra être triée par ordre alphabétique. */


    /* Method :
Split, reverse, join, push, sort */

function getPalindromes(words) {
    const palindromes = [];

    for (let i = 0; i < words.length; i++) {
        console.log(words[i]);
        console.log(words[i].split(''));
        console.log(words[i].split('').reverse());
        console.log(words[i].split('').reverse().join(''))
        const reverseWord = words[i].split('').reverse().join('');

        if (words[i] === reverseWord) {
            palindromes.push(words[i]);
        }
    }

    return palindromes.sort();
}

const examplePalindromes = ['HELLO', 'KAYAK', 'ANNA', 'TOTO', 'JAVASCRIPT', 'LOL', "MODEM"];
console.log(getPalindromes(examplePalindromes));



/* Exo 3 : 

créer une fonction qui prend une liste et renvoie une liste dans l'ordre inverse. ( Sans utiliser la methode reverse)
 */
/* Exo 4 : 

La course annuelle de Konexio approche à grands pas! Cette année, nous avons beaucoup de participants. 
Vous avez été embauché pour écrire un programme qui enregistrera les coureurs pour la course et leur donnera des instructions le jour de la course.
En tant que chronologie, l'enregistrement ressemblerait à ceci : 
09H30 => Adultes et enregistrement tôt.
 11H00 => Adultes et enregistrement tardif.
 12H30 => Le reste.

Voici comment fonctionne notre inscription.Il y a des coureurs adultes(plus de 18 ans) et des jeunes coureurs(moins de 18 ans). 
Ils peuvent s'inscrire tôt ou tard. Les coureurs se voient attribuer un numéro de course et une heure de départ en fonction de leur âge et 
de leur inscription.

 Les numéros de course:
 Les premiers adultes reçoivent un numéro de course égal ou supérieur à 1000.
 Tous les autres reçoivent un nombre inférieur à 1000.


 Heure de début:

 Les inscrits adultes courent à 9h30 ou 11h00.
 Les premiers adultes courent à 9h30.
 Les adultes en retard courent à 11h00.
 Les jeunes inscrits courent à 12h30(quelle que soit l'inscription).
 Mais nous n'avions pas prévu des coureurs qui ont exactement 18 ans ! N'oubliez pas  des les renvoyez à l'acceuil !

 PS : La gestion du nombre doit se faire dans le programme et n'est en aucun cas écrit en dur.

 voici un exemple de résultat final : " Vous allez courir à 9H30 et vous avez le numéro 1144" */

function konexioCourse(age, early) {
        let raceNumber = Math.floor(Math.random() * 1000);
        // let early = true;
        // let age = 22;

        if (age > 18 && early) {
            raceNumber += 1000;
        }
        if (age > 18 && early) {
            console.log(
                `You will race at 9:30am and you have the number ${raceNumber}`
            );
        } else if (age > 18 && !early) {
            console.log(
                `You will race a 11:00am and you have the number ${raceNumber}`
            );
        } else if (age < 18) {
            console.log(
                `You will race a 12:30am and you have the number ${raceNumber}`
            );
        } else {
            age === 18;
            console.log("Go to registration desk");
        }
    }

konexioCourse(42, false);