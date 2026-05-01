import './App.css'
import Header from './Header'
import Footer from './Footer'
import Statistiques from './Statistiques'

// function App() {
//   return (
//     <div className='App'>
//       <h1>Bienvenu sur SenTransport</h1>
//       <p>Le transport en commun a Dakar</p>
//     </div>
//   )
// }
function App() {
  return (
    <div className='App'>
      <Header />
      <main className='contenu'>
      <h2>Bienvenu ! Cette application vous aide a trouver votre ligne de bus a Dakar.</h2>
      <h2><Statistiques n1={125} n2={78} n3={350}/></h2>
      </main>
      <Footer />
    </div>
    
  )
}

export default App