import Formulario from "./components/Formulario"
import Header from "./components/Header"
import PacientsList from "./components/PacientsList"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <Formulario/>
      <PacientsList/>
    </div>
  )
}

export default App
