<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $categorie = htmlspecialchars($_POST['Catégories']);
	$anecdote = htmlspecialchars($_POST['Anecdote']);
    $source = htmlspecialchars($_POST['Source']);
	// Chemin et nom du fichier
    $fichier = 'anecdotes.txt';
	// Ouvrir en ecriture le fichier, le créé s'il n'existe pas
    $ecriture = fopen($fichier, 'a');
	// Vérifier si le fichier existe
    if (!file_exists($fichier)) {
        return "Le fichier n'existe pas. Problème lors de la création du fichier!!!";
    }
    // Formatage des données à écrire dans le fichier
    $ligne = "Catégories: $categorie, Anecdote: $anecdote, Source: $source\r\n";
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
    header("Location: accueil.html");
    exit();
}
else {
    echo "Méthode de requête non valide.";
}
?>