const Pacient = ({ pacient, setPacient, deletePacient }) => {

  const {pet, owner, email, date, sintoms, id} = pacient

  const handleDelete = () => {
    const answer = confirm('¿Desea eliminar el paciente?');

    if(answer){
        deletePacient(id)
    }
  }

  return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal-case">{pet}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
            <span className="font-normal normal-case">{owner}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className="font-normal normal-case">{email}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta
            <span className="font-normal normal-case">{date}</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
            <span className="font-normal normal-case">{sintoms}</span>
          </p>

          <div className="mt-5 flex justify-between">

            <button
              type="button"
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
              uppercase rounded-lg"
              onClick={() => setPacient(pacient)}
            >
              Editar
            </button>

            <button
              type="button"
              className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
              uppercase rounded-lg"
              onClick={handleDelete}
            >
              Eliminar
            </button>

          </div>
    </div>
  )
}

export default Pacient