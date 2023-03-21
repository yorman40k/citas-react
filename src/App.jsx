import Formulario from "./components/Formulario"
import Header from "./components/Header"
import PacientsList from "./components/PacientsList"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className=" mt-12 md:flex">
        <Formulario/>
        <PacientsList/>
      </div>
    </div>
  )
}

export default App
