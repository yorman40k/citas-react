import Pacient from "./Pacient"

function PacientsList({ pacients, setPacient, deletePacient }) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacients && pacients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>

          <p className="text-lg mt-5 text-center mb-10">
            Administra tus y {''}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas
            </span>
          </p>

          {
            pacients.map( pacient => (
              <Pacient
                key={pacient.id}
                pacient={pacient}
                setPacient={setPacient}
                deletePacient={deletePacient}
              />
            ))
          }
        </>
      ) : (

        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes
          </h2>

          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes y {''}
            <span className="text-indigo-600 font-bold">
              apareceran en este lugar
            </span>
          </p>
        </>        
      )
      
      } 
    </div>
  ) 
}

export default PacientsList