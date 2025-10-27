import { useState } from 'react'
import './App.css'
import HitungDiskon from './components/Hitungdiskon.jsx'
import HitungDiskon2 from './components/hitungDiskon2.jsx'

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null)

  return(
    <div>
      <h1>Latihan ReactVite - Muhammad Harris purnawan - 0320240046</h1>
      
      {!selectedComponent && (
        <div>
          <h2>Pilih Komponen:</h2>
          <button onClick={() => setSelectedComponent('diskon1')}>
            Hitung Diskon
          </button>
          <button onClick={() => setSelectedComponent('diskon2')}>
            Hitung Diskon 2
          </button>
        </div>
      )}

      {selectedComponent === 'diskon1' && (
        <div>
          <button onClick={() => setSelectedComponent(null)}>Kembali</button>
          <HitungDiskon />
        </div>
      )}

      {selectedComponent === 'diskon2' && (
        <div>
          <button onClick={() => setSelectedComponent(null)}>Kembali</button>
          <HitungDiskon2 />
        </div>
      )}
    </div>
  )
}

export default App
