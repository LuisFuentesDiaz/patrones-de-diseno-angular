/**
 * El patron de diseño "BUILDER" sirve para las entidades que se crean a lo largo del tiempo.
 * Ejemplo. Se crea un personaje . pero este personaje solo se crea con nombre y un tipo, los atributos de daño y nivel se le agregan con el tiempo.
 * para esto es el patron de diseño "BUILDER". conocido como Setter y Getter
 */


enum Tipo {
    "MAGO" = "Mago",
    "LUCHADOR" = "Luchador",
    "ASESINO" = "Asesino",
    "TIRADOR" = "Tirador",
    "SOPORTE" = "Soporte"
}

class Caracter {

    nivel: number;
    dañoFisico: number;
    dañoMagico: number;

    constructor(private nombre: string, private tipo: Tipo) { }

    mostrarStats(): void {
        console.log("nivel ", this.nivel);
        console.log("dañoFisico ", this.dañoFisico);
        console.log("dañoMagico ", this.dañoMagico);
    }
}

class CaracterBuilder {
    private caracter: Caracter;

    constructor(private nombre: string, private tipo: Tipo) {
        this.caracter = new Caracter(nombre, tipo);
    }

    setNivel(nivel: number) {
        this.caracter.nivel = nivel;
        return this;
    }

    setDañoFisico(dañoFisico: number) {
        this.caracter.dañoFisico = dañoFisico;
        return this;
    }

    setDañoMagico(dañoMagico: number) {
        this.caracter.dañoMagico = dañoMagico;
        return this;
    }

    build(): Caracter {
        return this.caracter;
    }
}

const asesinoBuild = new CaracterBuilder("zed", Tipo.ASESINO)
    .setDañoFisico(100)
    .setDañoMagico(100)
    .build();

console.log(asesinoBuild.mostrarStats());

