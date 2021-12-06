import { Municipio } from "./municipioModel";
import { Plato } from "./platoModel";
import { Usuario } from "./usuarioModel";

export interface Sitio{
    id: String;
    nombre: String;
    descripcion: String;
    fotos: String;
    usuario: Usuario;
    plato: Plato;
    municipio: Municipio;
}