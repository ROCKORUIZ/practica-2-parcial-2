class Persona{
    constructor(){
        this.nombre=null;
    }
 update(){
     database.ref('persona').set({
         'nombre': this.nombre 

     })
 }
}