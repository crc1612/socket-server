import { Usuario } from './usuario';
export class UsuariosLista {
    private Lista: Usuario[] = [];

    constructor() {}

    public agregar( usuario: Usuario) {
        this.Lista.push( usuario );
        console.log(this.Lista);
        return usuario;
    }
    public actualizarNombre( id: string, nombre: string ) {
        for( let usuario of this.Lista ) {
            if ( usuario.id === id ) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log('===== Actualizando usuario ======');
        console.log(this.Lista);
    }
    public getLista() {
        return this.Lista;
    }
    public getUsuario(id: string) {
        return this.Lista.find( usuario => {
            return usuario.id === id;
        })
    }
    // obtener usuarios en una sala en particular
    public getUsuariosEnSala( sala: string ) {
        return this.Lista.filter( usuario => usuario.sala === sala);
    }
    public borrarUsuario( id: string) {
        const tempUsuario = this.getUsuario(id);
        this.Lista = this.Lista.filter( usuario => {
            return usuario.id !== id;
        });
        // console.log(this.Lista);
        return tempUsuario;
    }
}