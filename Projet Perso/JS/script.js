let user = null;

document.querySelector('#FormInscription').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('prenom').value;
    const lastName = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('telephone').value;
    const password = document.getElementById('motdepasse').value;
    const confirmPassword = document.getElementById('motdepasseC').value;

    if (password !== confirmPassword) {
        document.getElementById('message').textContent = 'Les mots de passe ne correspondent pas.';
        return;
    }

    user = { firstName, lastName, email, tel }; // Simuler l'enregistrement
    document.getElementById('FormInscription').style.display = 'none';
});

document.querySelector('#redirectionconnexion').addEventListener('click', function() {
    document.getElementById("FormInscription").classList.add("Hidden");
    document.getElementById("FormConnexion").classList.remove("Hidden");
});

document.querySelector('#redirectioninscription').addEventListener('click', function() {
    document.getElementById("FormInscription").classList.remove("Hidden");
    document.getElementById("FormConnexion").classList.add("Hidden");
});