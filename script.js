class Personaje{
    constructor(nombre,forma,posicion){
        this.nombre=nombre;
        this.forma=forma;
        this.posicion=posicion;
    }
    obtDetalles(){
        return "Nombre: "+this.nombre+"\nForma: "+this.forma+"\nPosision: "+this.posicion;
    }
}

class Ave extends Personaje{
    constructor(nombre, forma, posicion, habilidad, masa){
        super(nombre,forma,posicion);
        this.habilidad=habilidad;
        this.masa=masa;
    }
    volar(n){
        console.log("Volar");
        document.getElementById("ave"+n).innerHTML=`Fly`;
    }
    toString(){
        return super.obtDetalles()+"\nFortaleza: "+this.habilidad+"\nMasa"+this.masa;
    }
}

class Pig extends Personaje{
    constructor(nombre, forma, posicion, fortaleza, puntos){
        super(nombre, forma, posicion);
        this.fortaleza=fortaleza;
        this.puntos=puntos;
    }
    morir(n){
        console.log("Morir");
        document.getElementById("cerdo"+n).innerHTML=`Death`;
    }
    toString(){
        return super.obtDetalles()+"\nFortaleza: "+this.fortaleza+"\nMasa:"+this.masa;
    }
}

ave1 = new Ave("ave1","ave",1,"volar",100);
ave2 = new Ave("ave2","ave",1,"volar",150);
ave3 = new Ave("ave3","ave",1,"volar",200);

cerdo1 = new Pig("Cerdo1","Cerdo",1,"Dureza",100);
cerdo2 = new Pig("Cerdo2","Cerdo",1,"Dureza",120);
cerdo3 = new Pig("Cerdo3","Cerdo",1,"Dureza",140);


function checkClick(d){
    switch(d.id){
        case "btn-info1":
            document.getElementById("info-ave").innerText=ave1.toString();
            break;
        case "btn-info2":
            document.getElementById("info-ave").innerText=ave2.toString();
            break;
        case "btn-info3":
            document.getElementById("info-ave").innerText=ave3.toString();
            break;
        case "btn-info4":
            document.getElementById("info-cerdo").innerText=cerdo1.toString();
            break;
        case "btn-info5":
            document.getElementById("info-cerdo").innerText=cerdo2.toString();
            break;
        case "btn-info6":
            document.getElementById("info-cerdo").innerText=cerdo3.toString();
            break;
        case "btn-fly1":
            ave1.volar(1);
            break;
        case "btn-fly2":
            ave2.volar(2);
            break;
        case "btn-fly3":
            ave3.volar(3);
            break;
        case "btn-death1":
            cerdo1.morir(1);
            break;
        case "btn-death2":
            cerdo2.morir(2);
            break;
        case "btn-death3":
            cerdo3.morir(3);
            break;
    }
}