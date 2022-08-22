import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";

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
    public cria(@Body()usuario:Usuario,@Res() res)
    {
       
        const usuarioCriado= this.usuarioService.cria(usuario);
        res.status(HttpStatus.CREATED).location(`/usuarios/${usuarioCriado.nome}`).json(usuarioCriado);
      
     
    }

}