import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PacientsList from "./components/PacientsList"

function App() {

  const [pacients, setPacients] = useState([]);
  const [pacient, setPacient] = useState({});

  const deletePacient = (id) => {
    const currentPacientList = pacients.filter(pacient => pacient.id !== id );

    setPacients(currentPacientList);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className=" mt-12 md:flex">
        <Form
          pacients={pacients}
          setPacients={setPacients}
          pacient={pacient}
          setPacient={setPacient}
        />
        <PacientsList
          pacients={pacients}
          setPacient={setPacient}
          deletePacient={deletePacient}
        />
      </div>
    </div>
  )
}

export default App
