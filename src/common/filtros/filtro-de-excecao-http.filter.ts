import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
//ERRROS DA APLICAÇÃO
@Catch()
export class FiltrodeExcecaoHttp implements ExceptionFilter{
    //PRA FUNCIONAR NO EXPRESS E NO FASTFY
    private httpAdapter:AbstractHttpAdapter;


    constructor(adapterHost:HttpAdapterHost)
    {
       this.httpAdapter= adapterHost.httpAdapter;
    }
    catch(exception: Error, host: ArgumentsHost) {
        const contexto=host.switchToHttp();
        const requisicao=contexto.getRequest();
        const resposta=contexto.getResponse();

        //VERIFCAR O TIPO DA EXCECAO
       const{status,body}= exception instanceof HttpException?{
            status:exception.getStatus(),
            body:exception.getResponse()
        }:
        {
            //CASO CONTRARIO
            status:HttpStatus.INTERNAL_SERVER_ERROR,
            body:{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp:new Date().toISOString(),
                message:exception.message,
                path:requisicao.path
            }
        };
        this.httpAdapter.reply(resposta,body,status);
    }

}