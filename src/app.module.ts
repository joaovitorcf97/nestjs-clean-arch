import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModuleTsModule } from './shared/infrastructure/env-config/env-config.module';

@Module({
  imports: [EnvConfigModuleTsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
