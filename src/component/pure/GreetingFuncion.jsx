import React from 'react'
import PropType from 'prop-types'
import { useState } from 'react'

export default function GreetingFuncion({name}) {
  const [age,setage]= useState(15);

  const birthday = ()=>{
    setage(age + 1);
  }
  return (
    <div>
      <h2>Hola {name}</h2>
      <p>Tienes {age} años</p>
      <p>Eres una {age<=15 ? 'Adolecente' : 'Joven'}</p>
      <button onClick={birthday}>Nueva edad</button>
    </div>
  )
}

GreetingFuncion.protTypes={
  name: PropType.string.isRequired
}
