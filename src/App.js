import './App.css'
import Header from './Header'

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
      <p>Bienvenu ! Cette application vous aide a trouver votre ligne de bus a Dakar.</p>
      </main>
    </div>
    
  )
}

export default App