import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Import the module
 ConfigModule.forRoot(), 
 TypeOrmModule.forRootRootAync (), 
 TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
 }),
 
 })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
