import { NestResponse } from './nest-response';
import { CallHandler, ExecutionContext,Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import{map} from 'rxjs/operators';
import { AbstractHttpAdapter,HttpAdapterHost } from '@nestjs/core';
@Injectable()
export class TransformaRespostaInterceptor implements NestInterceptor{
    private httpAdapter:AbstractHttpAdapter;


    constructor(adapterHost:HttpAdapterHost)
    {
       this.httpAdapter= adapterHost.httpAdapter;
    }
    
    
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        //INTERCEPTA QUANDO TA CHEGANDO E QUANDO TA SAINDO
        return next.handle().pipe(
            map(
              (  respostadoControlador:NestResponse)=>{
                if(respostadoControlador instanceof NestResponse)
                {
                    const contexto=context.switchToHttp();
                    const response=contexto.getResponse();
                    const{
                        headers,status,body
                    }
                    =respostadoControlador;

                    //CONFIGURAR O CABECALHO DE FORMA GENERICA
                    const nomedosCabecalhos=Object.getOwnPropertyNames(headers);
                    nomedosCabecalhos.forEach(nomedosCabecalhos=>{
                        const valordoCabecalho=headers[nomedosCabecalhos];
                        this.httpAdapter.setHeader(response,nomedosCabecalhos,valordoCabecalho
                            )
                    });
                    this.httpAdapter.status(response,status)

                    return body;


                }   
                return respostadoControlador;
              }

            )
        );
    }


}