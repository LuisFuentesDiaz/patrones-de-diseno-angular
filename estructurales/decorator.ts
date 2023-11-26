/**
 * El patron de diseño "DECORATOR" se utiliza para extender la funcionalidad de una entidad.
 */

//Declaramos una interface componente que tendrá un método
interface componente {
    operacion(): string;
}

//Implementamos la interface normalmente.
class ConcretarComponente implements componente {
    public operacion(): string {
        return "primer paso";
    }
}

/**  
 * Creamos una clase decorador u e es la que utilizaremos para extender la funcionalidad de la clase ConcretarComponente.
 * El decorador 
 * */
class Decorator implements componente {
    constructor(protected componente: componente) { }
    public operacion(): string {
        return this.componente.operacion();
    }
}

/**
 * Creamos la clase que extenderá la funcionalidad del decorador y le añadirá nueva funcionalidad
 * en este caso se le añade el texto "ComponenteDecorator"
 */

class ComponenteDecorator extends Decorator {
    public operacion(): string {
        return `ComponenteDecorator(${super.operacion()})`;
    }
}
//En este caso se crea una instancia de "ConcretarComponente"
const componente = new ConcretarComponente();// Imprimirá: "primer paso"

/**
 * ahora se instancia la clase "ComponenteDecorator" y se le pasa la instancia componente para que le agregue el contenido original 
 * que sera modificado en la clase "ComponenteDecorator"
 */
const componenteDecorator = new ComponenteDecorator(componente);// Imprimirá: "ComponenteDecorator(primer paso)"





