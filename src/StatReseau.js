// affiche au-dessus de la liste trois statistiques : le nombre total de lignes, le nombre total d'arrêts (somme), et la ligne ayant
// le plus d'arrêts.

import './StatReseau.css';
function StatReseau ({lignes}) {
    const totalLignes = lignes.length;
    const totalArrets = lignes.reduce((acc, ligne) => acc + ligne.arrets, 0);
    const ligneMaxArrets = lignes.reduce((maxLigne, ligne) => ligne.arrets > maxLigne.arrets ? ligne : maxLigne, lignes[0]);
    return (
        <div className="stat-reseau">
            <p className="stat"> {totalLignes} Lignes </p>
            <p className="stat"> {totalArrets} Arrêts</p>
            <p className="stat"> Ligne avec le plus d'arrêts : {ligneMaxArrets.numero} : ({ligneMaxArrets.arrets} arrêts)</p>
        </div>
    )
}

export default StatReseau;