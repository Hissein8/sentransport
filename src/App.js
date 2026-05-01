import './App.css'
import Header from './Header'
import Footer from './Footer'
import Statistiques from './Statistiques'
import LigneBus from './LigneBus'
import ListeLignes from './ListeLignes'

function App() { 
  const lignes = [
{id: 1, numero: "1", depart: "Parcelles Assainies", arrivee: "Plateau", arrets: 14},
{id: 2, numero: "7", depart: "Guediawaye", arrivee: "Place Obe", arrets: 18},
{id: 3, numero: "15", depart: "Pikine", arrivee: "Medina", arrets: 12},
{id: 4, numero: "23", depart: "Ouakam", arrivee: "Grand Dakar", arrets: 10 },
{id: 5, numero: "8", depart: "Almadies", arrivee: "Colobane", arrets: 16 },
{id:6, numero: "12", depart: "Yoff", arrivee: "Sandaga", arrets: 11},
];
  return (
    <div className="App">

      <Header />

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