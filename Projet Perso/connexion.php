<?php
// Fonction pour rechercher un nom et mdp dans un fichier txt
function rechercheInscription($fichier, $mailRechercher, $mdpRechercher) {
    // Ouvrir en lecture le contenu du fichier
    $lecture = fopen($fichier, 'r');
	// Vérifier si le fichier existe
    if (!file_exists($fichier)) {
        return "Le fichier n'existe pas.";
    }
	// Déclarer un tableau de retour du résultat
    $resultats = [];
	// Lit le fichier ligne par ligne
	while (($ligne = fgets($lecture)) !== false) {
		// Vérifier si le nom et prénom spécifiés sont présents dans la ligne
		if (strpos($ligne, $mailRechercher) !== false && strpos($ligne, $mdpRechercher) !== false) {
			$resultats[] = $ligne; // Ajouter à la liste des résultats
		}
	}
	// Ferme le fichier
	fclose($lecture);
    // Retourner les résultats
    return $resultats;
}

// Utilisation de la fonction "rechercheInscription"
$fichier = 'inscription.txt'; // Le fichier contenant les ...
$mailRechercher = $_POST['Email']; // Nom à rechercher
$mdpRechercher = $_POST['MdP']; // MdP à rechercher

$resultats = rechercheInscription($fichier, $mailRechercher, $mdpRechercher);

// transmettre les résultats
if (empty($resultats)) {
    echo "Aucun résultat trouvé: Veuillez vous inscrire au préalable!!!";
	// Redirection vers la page d'inscription
    header("Location: formulaire.html");
    exit();
} 
else {
    foreach ($resultats as $TransmettreLeResultat) {//Alias pour affichage
        echo $TransmettreLeResultat . "<br>";
    }
	// Redirection vers la page d'accueil
    header("Location: accueil.html");
    exit();
}
?>
