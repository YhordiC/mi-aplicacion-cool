import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/ContactComponent'

export default function ContactList() {
const Contactos = new Contact('Joselin','Flores Ramirez','joselin@gmail.com',true)
  return (
    <div>
        <h2>Lista de Contactos</h2>
       <ContactComponent contact={Contactos}></ContactComponent>
    </div>
  )
}
