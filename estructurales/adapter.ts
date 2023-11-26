/**
 * El patron de diseño "ADAPTER" se utiliza para actualizar o adaptar una entidad si tocar la clase original.
 */

interface JoystickViejo {
    conectarPuerto(): void;
    leerEntrada(): void;
}
//Creamos una nueva clase que implemente JoystickViejo para heredar sus métodos
class JoystickViejoImp implements JoystickViejo {
    conectarPuerto(): void {
        console.log("conectando puerto...");

    };

    leerEntrada(): void {
        console.log("Leyendo Entradas.....");

    }
}

interface UsbJoystick {
    conectarUsb(): void;
    leerDatos(): void;
}

//Ahora creamos la nueva clase que sera la actualización del joystick viejo
class UsbJoystickImp implements UsbJoystick {
    conectarUsb(): void {
        console.log("Conectando Usb....");

    }
    leerDatos(): void {
        console.log("Leyendo Datos");
    }

}

//En esta clase se creara el adaptador para pasar del joystick viejo al joystick nuevo.
class JoystickViejoAdaptado implements UsbJoystick {
    constructor(private joystickViejo: JoystickViejo) { }
    conectarUsb(): void {
        this.joystickViejo.conectarPuerto();
    }
    leerDatos(): void {
        this.joystickViejo.leerEntrada();
    }
}

const joystickViejoSinAdaptador = new JoystickViejoImp();//se crea una instancia del joystick viejo
const JoystickViejoConAdaptador = new JoystickViejoAdaptado(joystickViejoSinAdaptador);// y se le pasa a una nueva instancia del adaptador que en su interior implementa el joystick nuevo
JoystickViejoConAdaptador.conectarUsb();//por lo tanto ahora podemos acceder a los nuevos métodos del adaptador. pero en el fondo es el joystick viejo
JoystickViejoConAdaptador.leerDatos();