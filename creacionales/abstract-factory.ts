/**
 * El patron de diseño "ABSTRACT FACTORY" nos permitirá crear objetos que están relacionados pero no definidos.
 */

interface EnemigoFactory {
    crearEnemigoNormal(): EnemigoNormal;
    crearEnemigoJefe(): EnemigoJefe;
}

abstract class Enemigo {
    abstract atacar(): void;
}

class EnemigoNormal extends Enemigo {
    atacar(): void {
        console.log("el enemigo normal ataca");
    }
}

class EnemigoJefe extends Enemigo {
    atacar(): void {
        console.log("El enemifo jefe ataca");

    }
}

class JuegoEnemigoFactory implements EnemigoFactory {
    crearEnemigoNormal(): Enemigo {
        return new EnemigoNormal();
    }
    crearEnemigoJefe(): Enemigo {
        return new EnemigoJefe();
    }
}

const crearEnemigo = (factory: EnemigoFactory) => {
    const enemigoNormal = factory.crearEnemigoNormal();
    enemigoNormal.atacar();
    const enemigoJefe = factory.crearEnemigoJefe();
    enemigoJefe.atacar();
}