import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Filters from './components/Filters/Filters'
import CharacterCard from './components/CharacterCard/CharacterCard'

function App() {
  return (
    <div className='App'>
      <h1 className='text-center'>The Rick and Morty API</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-2'><Filters/></div>
          <div className='col-10'>
            <div className='row card-section'>
            <CharacterCard/>
            <CharacterCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
