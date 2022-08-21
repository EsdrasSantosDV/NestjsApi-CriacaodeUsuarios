import { IsNomeDeUsuarioUnicoConstraint } from './is-nome-de-usuario-unico.validator';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Module } from "@nestjs/common";

@Module({
    controllers:[UsuarioController],
    providers:[UsuarioService,IsNomeDeUsuarioUnicoConstraint]
})
export class UsuarioModule{

}