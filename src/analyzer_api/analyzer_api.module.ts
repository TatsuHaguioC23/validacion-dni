import { Module } from '@nestjs/common';
import { AnalyzerApiService } from './analyzer_api.service';
import { AnalyzerApiController } from './analyzer_api.controller';

@Module({
  providers: [AnalyzerApiService],
  controllers: [AnalyzerApiController]
})
export class AnalyzerApiModule {}
