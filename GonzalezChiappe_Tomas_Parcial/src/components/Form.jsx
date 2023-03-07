import React from 'react'
import { useState } from 'react'
import Card from './Card.jsx'

const Form = () => {
    const [user, setUser] = useState({
        name: "", 
        email:"", 
        sede:""})

    const [show, setShow] = useState(false);
    const [err, serErr] = useState(false)
    const handleSubmit = function(e){
        e.preventDefault();
        validacion()
        

    }

    const validacion = () => {
        if(user.name.length >= 3 && (user.name.startsWith(" ")== false) && user.email.length >= 6){
            setShow(true);
            serErr(false);            
        }else{
            serErr(true);
        }
    }

  return (
    <>
    {show ?
     (<Card name={user.name} sede={user.sede}/>)  
  
     :
    
    ( 
    <form onSubmit={handleSubmit}>
        <label >Nombre: </label>
        <input type="text" value={user.name} onChange={(event)=>{ setUser({...user, name: event.target.value }) }}/>
        
        <label >Email: </label>
        <input type="email" value={user.email} onChange={(event)=>{ setUser({...user, email: event.target.value }) }}/>

        <select name="" id="" value={user.sede} onChange={(event)=>{ setUser({...user, sede: event.target.value }) }}>
        <option value="">Sede</option>
        <option value="San Isidro">San Isidro</option>
        <option value="La Plata">La Plata</option>
        <option value="Almagro">Almagro</option>
        </select>
        {err && <div>Por favor chequea que la información sea correcta.</div>}
        <button>Enviar</button>
        {show && <Card name={user.name} sede={user.sede}/>}

    </form>

    )}
    </>
    )
}

export default Form;