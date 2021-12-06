import { Sitio } from "./sitioModel";

export interface Plato {
    id:          String;
    nombre:      String;
    descripcion: String;
    fotos:       String;
    sitio:       Sitio;
}