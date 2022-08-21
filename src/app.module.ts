import { UsuarioModule } from './usuarios/usuario.module';
import { UsuarioService } from './usuarios/usuario.service';
import { UsuarioController } from './usuarios/usuario.controller';

import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';


//PRECISA COLOCAR NO APP.MODULE AS CONTROLLERS E OS SERVICES
@Module({
  imports: [
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService,{provide: APP_INTERCEPTOR,useClass: ClassSerializerInterceptor
  }],
})
export class AppModule {}
