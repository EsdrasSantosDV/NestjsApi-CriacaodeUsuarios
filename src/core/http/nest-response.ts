export class NestResponse{
    status:number;
    headers:Object;
    body:Object;

    constructor(resposta:NestResponse){
        // this.status=resposta.status;
        // this.headers=resposta.headers;
        // this.body=resposta.body
        Object.assign(this,resposta);
        //ASSIGN SUBSTITUI TODA AS LINHAS DE CIMA,PRIMEIRO E O TARGET E SEUNGDO E QUE VAI SER SUBSTITUIDO
    }

}