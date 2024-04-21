import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Import the module
 ConfigModule.forRoot(), 
 TypeOrmModule.forRootRootAync (), 
 
 })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
