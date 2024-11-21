// Script pour changer entre le formulaire de connexion et d'inscription

if(document.querySelector('#redirectionconnexion')) {
document.querySelector('#redirectionconnexion').addEventListener('click', function () {
    document.getElementById("FormInscription").classList.add("Hidden");
    document.getElementById("FormConnexion").classList.remove("Hidden");
});}

if(document.querySelector('#redirectioninscription')) {
document.querySelector('#redirectioninscription').addEventListener('click', function () {
    document.getElementById("FormInscription").classList.remove("Hidden");
    document.getElementById("FormConnexion").classList.add("Hidden");
});}

function checkPwd() {
    const password = document.getElementById('motdepasse').value;
    const confirmPassword = document.getElementById('motdepasseC').value;
    const messageElement = document.getElementById('message');
    if (password !== confirmPassword) {
        event.preventDefault(); // Empêche le formulaire de soumettre
        messageElement.textContent = "Les mots de passe ne correspondent pas. Veuillez réessayer.";
    } else {
        messageElement.textContent = ""; // Réinitialiser le message
    }
}

// JS Soumission anecdote

function doSomething(obj) {
    var valeur = obj.options[obj.selectedIndex].value;

    if (valeur == "basique") {
        document.getElementById("chgmnt").classList.remove("Sports");
        document.getElementById("chgmnt").classList.remove("Animaux");
        document.getElementById("chgmnt").classList.remove("Culture");
    }
    if (valeur == "Culture") {
        document.getElementById("chgmnt").classList.remove("Sports");
        document.getElementById("chgmnt").classList.remove("Animaux");
        document.getElementById("chgmnt").classList.add("Culture");
    }
    if (valeur == "Sport") {
        document.getElementById("chgmnt").classList.add("Sports");
        document.getElementById("chgmnt").classList.remove("Animaux");
        document.getElementById("chgmnt").classList.remove("Culture");
    }
    if (valeur == "Animaux") {
        document.getElementById("chgmnt").classList.remove("Sports");
        document.getElementById("chgmnt").classList.add("Animaux");
        document.getElementById("chgmnt").classList.remove("Culture");
    }
}

// Script accueil

function playsound(){
    document.querySelector("#FooterAcc").addEventListener("click", play);
}
function play() {
    var audio = document.getElementById("audio");
    audio.volume = 0.2;
    audio.play();
}