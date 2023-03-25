import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes }) => {

  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const generateId = () => {

    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if( [mascota, propietario, email, fecha, sintomas].includes('') ){
      setError(true)
    }else{
      
      setError(false);

      const pacientObject = {
        mascota,
        propietario,
        email,
        fecha,
        sintomas,
        id: generateId()
      }

      setPacientes([...pacientes, pacientObject]);

      setMascota('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    }
    
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y {''}
          <span className="text-indigo-600 font-bold">
            Administralos
          </span>
        </p>

        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg ml-10 py-10 px-5 mb-20"
        >
          { error && 
            <Error>
              <p>Todos los campos son obligaotrios</p>
            </Error>
          }
          
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre mascota
            </label>

            <input 
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              value={mascota}
              onChange={(e) => setMascota(e.target.value)}
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
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
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
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
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