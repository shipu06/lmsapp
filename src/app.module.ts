import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-8df05ff-rsf-india.a.aivencloud.com',
      port: 14450,
      username: 'avnadmin',
      password: 'AVNS_CkjxJO3cQghii3MxMSR',
      database: 'defaultdb',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
