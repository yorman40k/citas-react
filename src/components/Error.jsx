const Error = ({ message }) => {


  return (
    <div className="bg-red-700 text-white text-center 
    p-3 uppercase font-bold rounded-md mb-5">
    
        <p>{ message }</p>

    </div>
  )
}

export default Error