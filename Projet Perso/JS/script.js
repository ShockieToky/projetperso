// Script Formulaire

// let user = null;

// document.querySelector('#FormInscription').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const firstName = document.getElementById('prenom').value;
//     const lastName = document.getElementById('nom').value;
//     const email = document.getElementById('email').value;
//     const tel = document.getElementById('telephone').value;
//     const password = document.getElementById('motdepasse').value;
//     const confirmPassword = document.getElementById('motdepasseC').value;

    // if (password !== confirmPassword) {
    //     document.getElementById('message').textContent = 'Les mots de passe ne correspondent pas.';
    //     return;
    // }

//     user = { firstName, lastName, email, tel };
//     document.getElementById('FormInscription').style.display = 'none';
//     // window.location.href = "../accueil.html";
// });

// Script pour changer entre le formulaire de connexion et d'inscription

document.querySelector('#redirectionconnexion').addEventListener('click', function () {
    document.getElementById("FormInscription").classList.add("Hidden");
    document.getElementById("FormConnexion").classList.remove("Hidden");
});

document.querySelector('#redirectioninscription').addEventListener('click', function () {
    document.getElementById("FormInscription").classList.remove("Hidden");
    document.getElementById("FormConnexion").classList.add("Hidden");
});

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