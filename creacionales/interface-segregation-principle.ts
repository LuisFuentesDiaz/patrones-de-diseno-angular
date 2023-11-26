/**
 * El patron "INTERFACE SEGREGATION PRINCIPLE" sirve para cuando se tiene una super interface, muy grande y con muchos métodos.
 * sus métodos se dividirán en partes mas pequeñas para darle escalabilidad.
 */

interface Animal1 {
    caminar(distancia: number): void;
    nadar(distace: number): void;
    comer(): void;
    dormir(): void;
}

/**
 * En el ejemplo anterior tenemos como se declararía una "Interface" sin el patron.
 * pero que pasaría si de esa "interface" no necesitamos ciertos métodos.
 * como por ejemplo si creáramos una clase pez, no necesita el método caminar.
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface accionCaminar {
    caminar(distancia: number): void;
}

interface Animal2 {
    comer(): void;
    dormir(): void;
    nadar(distancia: number): void;
}

class Perro implements Animal2, accionCaminar {
    nadar(distancia: number): void {
        console.log("estoy nadando", distancia);
    }
    caminar(distancia: number): void {
        console.log("estoy caminando", distancia);
    }
    comer(): void {
        console.log("estoy comiendo");
    }
    dormir(): void {
        console.log("estoy durmiendo");
    }
}

class Pescado implements Animal2 {

    nadar(distancia: number): void {
        console.log("estoy nadando", distancia);
    }
    comer(): void {
        console.log("estoy comiendo");
    }
    dormir(): void {
        console.log("estoy durmiendo");
    }
}

/**
 * Como vemos en el ejemplo anterior, se crean 2 clases (perro y pez) en donde pez no utiliza todo los métodos de la clase Animal1
 * por lo cual se crearon los métodos aparte que son los que se extienden según las necesidades de la clase
 */