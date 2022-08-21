import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, Param, Post } from "@nestjs/common";

//URL
@Controller('usuarios')
export class UsuarioController{
   

    constructor(private usuarioService:UsuarioService){

    }
   



    @Get(':nome')
    public buscapornome(@Param('nome')nomedousuario:string)
    {
        const usuario=this.usuarioService.buscarpornome(nomedousuario);
        return usuario;
    }

    
    @Post()
    public cria(@Body()usuario:Usuario)
    {
       
        const usuarioCriado= this.usuarioService.cria(usuario);
        return usuarioCriado;
    }

}