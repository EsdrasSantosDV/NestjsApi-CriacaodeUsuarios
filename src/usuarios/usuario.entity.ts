import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Isnomeunico } from "./is-nome-de-usuario-unico.validator";

export class Usuario{
    id:number;
    //UTILIZANDO O CLASS VALIDATOR CONSEGUIMOS VALIDAR CADA CAMPO DA CLASSE E COLOCAR UMA MENSAGEM DE ERRO
    @Isnomeunico(
        {
            message:'Nome Precisa ser Unico'
        }
    )
    @IsNotEmpty()
    @IsString()
    nome:string;
    @IsEmail()
    email:string;
    @IsNotEmpty()
    senha:string;
    @IsNotEmpty({
        message:'Nome Completo é Obrigatorio'
    })
    nomecompleto:string;
    data:Date;

}