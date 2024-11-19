<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nom = htmlspecialchars($_POST['Nom']);
    $prenom = htmlspecialchars($_POST['Prénom']);
	$email = htmlspecialchars($_POST['Email']);
    $motdepasse = htmlspecialchars($_POST['MdP']);
	// Chemin et nom du fichier
    $fichier = 'inscription.txt';
	// Ouvrir en ecriture le fichier, le créé s'il n'existe pas
    $ecriture = fopen($fichier, 'a');
	// Vérifier si le fichier existe
    if (!file_exists($fichier)) {
        return "Le fichier n'existe pas. Problème lors de la création du fichier!!!";
    }
    // Formatage des données à écrire dans le fichier
    $ligne = "Nom: $nom, Prénom: $prenom, Email: $email, Mot de passe: $motdepasse\r\n";
	// Écrit la ligne dans le fichier
	if ($ecriture) {
		fwrite($ecriture, $ligne);
		echo "L'inscription a été enregistrée dans le fichier avec succès.";
	}
	else {
		echo "Erreur lors de l'enregistrement des données.";
	}
	// Ferme le fichier
	fclose($ecriture);
	// Redirection vers la page connexion
    header("Location: formulaire.html");
    exit();
}
else {
    echo "Méthode de requête non valide.";
}
?>
