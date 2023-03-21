const Formulario = () => {
  return (
    <div className="w-1/2 lg:w-2/5">
        <h2 className="font-bold text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y {''}
          <span className="text-indigo-600 font-bold">
            Administralos
          </span>
        </p>

        <form className="bg-white shadow-md rounded-lg ml-10 py-10 px-5 mb-20">
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre mascota
            </label>

            <input 
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre propietario
            </label>

            <input 
              id="propietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
            </label>

            <input 
              id="email"
              type="email"
              placeholder="Email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Fecha de alta
            </label>

            <input 
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            />
          </div>

          <div>
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Síntomas
            </label>

            <textarea 
              id="sintomas" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los síntomas"
            />
          </div>

          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 mt-2 text-white uppercase font-bold rounded-md 
            hover:bg-indigo-800 cursor-pointer transition-colors"
            value="Agregar paciente"
          />
        </form>
    </div>
  )
}

export default Formulario