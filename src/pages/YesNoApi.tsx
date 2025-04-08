import { useEffect, useState } from "react";
import { yesNoConnection } from "../services/YesNoService";
export const YesNoApi = () => {
    
    const [respuesta, setrespuesta] = useState({
        answer:'',
        force:false,
        image:''
    })
    const style={
        backgroundImage:`url(${respuesta.image})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'70vh',
        widht:'100%'
    }
   const getAnswer=async()=>{
    const loquemeDe=await yesNoConnection();
    setrespuesta({answer:loquemeDe.answer,
        force:loquemeDe.forced,
        image:loquemeDe.image
    })
   }
   useEffect(() => {
     getAnswer();
   }, [])
   
   return (
    <>
        <div style={style} className="text-white">
            <h1 className="text-4xl font-bold mb-4">{respuesta.answer}</h1>
            <input type="text" placeholder="Ingrese su pregunta"
            className="w-full py-3 rounded-md border border-gray-300 text-black" />
            <button onClick={getAnswer}
            className="bg-indigo-900 hover:bg-blue-950 text-white
            font-semibold px-6 py-3">Preguntar</button>
        </div>
    </>
  )
}
