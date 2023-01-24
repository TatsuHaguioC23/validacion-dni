import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnalyzerApiModule } from './analyzer_api/analyzer_api.module';

@Module({
  imports: [AnalyzerApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
