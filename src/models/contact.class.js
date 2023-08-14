
export class Contact{  //mi clase de contacto
    name='' || 'Nombre del contacto';
    lastname='' || 'Apellido del contacto';
    email='' || 'Email del contacto';
    conectado = false;

    constructor(name,lastname,email,conectado){
        this.name=name;
        this.lastname=lastname;
        this.email=email;
        this.conectado=conectado;
    }

}