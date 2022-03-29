class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombre=createElement("h3");
        this.apellido=createElement("h3");
        this.telefono=createElement("h3");
        this.genero=createElement("h3");
        this.input = createInput();
        this.inputp = createInput();
        this.inputf = createInput();
        this.inputr = createInput()
        this.button = createButton("registrarse");
    } 
    display(){
        this.title.html("registro de persona");
        this.title.position(130,0);
        this.nombre.html("ingresa tu nombre");
        this.nombre.position(130,100);
        this.input.position(130,160);
        this.apellido.html("ingresa tu apellido");
        this.apellido.position(130,200);
        this.inputp.position(130,260);
        this.telefono.html("ingresa tu telefono");
        this.telefono.position(130,300);
        this.inputf.position(130,360);
        this.genero.html("ingresa tu genero");
        this.genero.position(130,400);
        this.inputr.position(130,460);
        this.button.position(250,500);

        this.button.mousePressed(()=>{
            persona.nombre=this.input.value();
            persona.update();
        })
    }
}