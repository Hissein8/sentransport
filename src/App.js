import './App.css'
import Header from './Header'
import Footer from './Footer'
import Statistiques from './Statistiques'
import LigneBus from './LigneBus'
import ListeLignes from './ListeLignes'
import StatReseau from './StatReseau'

function App() { 
  const lignes = [
// {id: 1, numero: "1", depart: "Parcelles Assainies", arrivee: "Plateau", arrets: 14},
// {id: 2, numero: "7", depart: "Guediawaye", arrivee: "Place Obe", arrets: 18},
// {id: 3, numero: "15", depart: "Pikine", arrivee: "Medina", arrets: 12},
// {id: 4, numero: "23", depart: "Ouakam", arrivee: "Grand Dakar", arrets: 10 },
// {id: 5, numero: "8", depart: "Almadies", arrivee: "Colobane", arrets: 16 },
// {id:6, numero: "12", depart: "Yoff", arrivee: "Sandaga", arrets: 11},
{id: 1, couleur: "#FF0000", numero: "1", depart: "Parcelles Assainies", arrivee: "Plateau", arrets: 14},
{id: 2, couleur: "#0000FF", numero: "7", depart: "Guediawaye", arrivee: "Place Obe", arrets: 18},
{id: 3, couleur: "#00FF00", numero: "15", depart: "Pikine", arrivee: "Medina", arrets: 12},
{id: 4, couleur: "#FFFF00", numero: "23", depart: "Ouakam", arrivee: "Grand Dakar", arrets: 10 },
{id: 5, couleur: "#800080", numero: "8", depart: "Almadies", arrivee: "Colobane", arrets: 16 },
{id:6, couleur: "#FFA500", numero: "12", depart: "Yoff", arrivee: "Sandaga", arrets: 11},
{id: 7, couleur: "#391818", numero: "5", depart: "Hann", arrivee: "Dieuppeul", arrets: 8},
{id: 8, couleur: "#044176", numero: "10", depart: "Dakar", arrivee: "Sacré-Cœur", arrets: 20},
{id: 9, couleur: "#ebf2bb", numero: "18", depart: "Thiaroye", arrivee: "Hann", arrets: 15},
{id: 10, couleur: "#696969", numero: "20", depart: "Grand Dakar", arrivee: "Sicap", arrets: 13},
];
  return (
    <div className="App">

      <Header />

      <StatReseau lignes={lignes}/>

      <main className='contenu'>
        <ListeLignes lignes={lignes}/>
      </main>

      <Footer />
    
    </div>
  );
}

export default App




// function App() {
//   return (
//     <div className='App'>
//       <h1>Bienvenu sur SenTransport</h1>
//       <p>Le transport en commun a Dakar</p>
//     </div>
//   )
// }
// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <main className='contenu'>
//       <h2>Bienvenu ! Cette application vous aide a trouver votre ligne de bus a Dakar.</h2>
//       <h2><Statistiques n1={125} n2={78} n3={350}/></h2>
//       </main>
//       <Footer />
//     </div>
    
//   )
// }