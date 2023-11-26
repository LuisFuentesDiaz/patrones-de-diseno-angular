/**
 * El patron de diseño "SINGLETON" esta diseñado para que al instanciar una clase
 * solo se cree una instancia aunque esta se llame muchas veces. Si ya existe se retorna y si no, se crea.
 */

//Tomaremos el ejemplo de una instancia de una base de datos
class DataBase {

    private static instance: DataBase;
    constructor() {

    }
    //Se crea el metodo que nos creara la instancia única 
    public static getInstance(): DataBase {
        /** 
         * Se pregunta si existe una instancia 
         * de existir no hace nada y retorna la instancia ya existente.
         * de no existir se crea una nueva y se retorna.
         */
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }

    public query(query: string): void {
        console.log("Ejecutando query ", query);

    }
}

const db = DataBase.getInstance();
db.query("getioname esta query");