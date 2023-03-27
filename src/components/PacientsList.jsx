import Pacient from "./Pacient"

function PacientsList({ pacientes, setPaciente }) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
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
            pacientes.map( paciente => (
              <Pacient
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
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