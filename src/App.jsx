import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import PacientsList from "./components/PacientsList"

function App() {

  const [paciente, setPaciente] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className=" mt-12 md:flex">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}  
        />
        <PacientsList/>
      </div>
    </div>
  )
}

export default App
