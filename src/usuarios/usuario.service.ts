import { Usuario } from './usuario.entity';
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioService{

     private usuarios=[];

     
     public cria(usuario)
     {
       this.usuarios.push(usuario);
 
        return usuario;
     }

     public buscarpornome(nome:string):Usuario
     {
         return   this.usuarios.find(usuario=>usuario.nome==nome);
     }

}    