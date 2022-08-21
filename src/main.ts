import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //PIPES
  //PARA VALIDAR OS DADOS NA API
  app.useGlobalPipes(new ValidationPipe({
    transform:true

  }));
  //DEFINIR QUEM VAI FAZER A INJEÇÃO DE DEPENDENCIA DO CLASS VALIDATOR
  //ESTAMOS DELEGANDO PARA O NEST
  useContainer(app.select(AppModule),{fallbackOnErrors:true});




  app.enableCors();
  await app.listen(3000);
}
bootstrap();
