import Booster from './components/Booster'

import Balance from './components/Balance'

import Lemon from './components/Lemon'

import './App.css'

function App() {

  return (
    <>
      <div>
        <Balance total="155" />
        <Lemon />
        
        <Booster value="3.4" />
      </div>  
    </>
  )

}

export default App