
let valeurCalculatrice = "";   //String des chiffres afficher
let calculatrice;   // Champs de texte de la calculatrice
let calcul = "";    // Type de calcul à effectuer
let valeurStocker = 0;  // Valeur stocker pour les calcul

/** Fonction pour ajouter un chiffre
 * 
 * appaler à l'appuie d'un bouton chiffre (0-9)
 * le chiffre est le paramètre
 *  
 */
function ValeurAjout(parameter){
    calculatrice = document.getElementById("nombreCalc");
    valeurCalculatrice += parameter;
    
    // Pansement pour laisser un seul zéro d'afficher
    if(valeurCalculatrice == '00' || valeurCalculatrice == 0){
        valeurCalculatrice = ""; 
        valeurCalculatrice = parameter
    }
    
    console.log(valeurCalculatrice + " c'est la valeur et le texte : " );
    calculatrice.value = valeurCalculatrice.toString();
}

// Fonction pour annuler tout les calcul en cours
function Annulation(){
    valeurCalculatrice = "";
    calculatrice.value = valeurCalculatrice;
    calcul = "";
}

/** Fonction pour lancer le calcul d'addition
 * 
 * Stocke la valeur affiché puis passe la calculatrice en mode Addition
 * 
 * Effectue l'addition de la valeur stocké et de la valeur affiché si le mode est Addition
 */
function Ajout(){
    
    if(calcul == "Ajout"){
        console.log("résultat --- " + calcul);
        valeurCalculatrice = parseInt(valeurCalculatrice);
        valeurCalculatrice += valeurStocker;
        calculatrice.value = valeurCalculatrice; 
        calcul = "";
        valeurCalculatrice = "";
        
    }else{
        valeurStocker = parseInt(valeurCalculatrice);
        valeurCalculatrice = "";
        calculatrice.value = "";
        calcul = "Ajout"
        console.log("pas de résultat --- " + calcul);
    }
}

/** Fonction pour lancer le calcul de soustraction
 * 
 * Stocke la valeur affiché puis passe la calculatrice en mode Soustraction
 * 
 * Effectue la soustraction de la valeur stocké et de la valeur affiché si le mode est Soustraction
 */
function Soustraction(){
    if(calcul == "Soust"){
        console.log("résultat --- " + calcul);
        valeurCalculatrice = parseInt(valeurCalculatrice);
        valeurCalculatrice = valeurStocker - valeurCalculatrice;
        calculatrice.value = valeurCalculatrice; 
        calcul = "";
        valeurCalculatrice = "";
       
    }else{
        valeurStocker = parseInt(valeurCalculatrice);
        valeurCalculatrice = "";
        calculatrice.value = "";
        calcul = "Soust"
        console.log("pas de résultat --- " + calcul);
    }
}

/** Fonction pour lancer le calcul de Multiplication
 * 
 * Stocke la valeur affiché puis passe la calculatrice en mode Multiplication
 * 
 * Effectue la multiplication de la valeur stocké et de la valeur affiché si le mode est Multiplication
 */
function Multiplication(){
    if(calcul == "Mult"){
        console.log("résultat --- " + calcul);
        valeurCalculatrice = parseInt(valeurCalculatrice);
        valeurCalculatrice *= valeurStocker;
        calculatrice.value = valeurCalculatrice; 
        calcul = "";
        valeurCalculatrice = "";

    }else{
        valeurStocker = parseInt(valeurCalculatrice);
        valeurCalculatrice = "";
        calculatrice.value = "";
        calcul = "Mult"
        console.log("pas de résultat --- " + calcul);
    }
}

/** Fonction pour lancer le calcul de Division
 * 
 * Stocke la valeur affiché puis passe la calculatrice en mode Division
 * 
 * Effectue la division de la valeur stocké par la valeur affiché si le mode est Division
 */
function Division(){
    if(calcul == "Mult"){
        console.log("résultat --- " + calcul);
        valeurCalculatrice = parseInt(valeurCalculatrice);
        valeurCalculatrice = valeurStocker/valeurCalculatrice;
        calculatrice.value = valeurCalculatrice; 
        calcul = "";
        valeurCalculatrice = "";

    }else{
        valeurStocker = parseInt(valeurCalculatrice);
        valeurCalculatrice = "";
        calculatrice.value = "";
        calcul = "Mult"
        console.log("pas de résultat --- " + calcul);
    }
}