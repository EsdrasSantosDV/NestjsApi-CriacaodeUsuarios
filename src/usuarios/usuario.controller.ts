import { NestResponseBuilder } from './../core/http/nest-response-builder';
import { NestResponse } from './../core/http/nest-response';
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
    public cria(@Body()usuario:Usuario):NestResponse
    {
       
        const usuarioCriado= this.usuarioService.cria(usuario);
        return new NestResponseBuilder().comStatus(HttpStatus.CREATED).comHeaders({
            'Location':`/usuarios/${usuarioCriado.nome}`
        })
        .comBody(usuarioCriado)
        .build();

    }

}