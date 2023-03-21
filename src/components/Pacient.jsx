const Pacient = () => {
  return (
    <div className="m-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal">Hook</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
            <span className="font-normal normal">Juanito Alimaña</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className="font-normal normal">correo@correo.com</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {""}
            <span className="font-normal normal">10 de Diciembre de 2022</span>
          </p>

          <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
            <span className="font-normal normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ab nobis voluptatum aliquam inventore! Harum quia quod accusamus fuga eum cum atque nemo id
              ratione. Ducimus reprehenderit ipsam sequi odit quo?</span>
          </p>
    </div>
  )
}

export default Pacient