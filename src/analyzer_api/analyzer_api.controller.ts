import { Controller, Get } from '@nestjs/common';
import { AnalyzerApiService } from './analyzer_api.service';

@Controller('analyzer-api')
export class AnalyzerApiController {

    constructor(private service: AnalyzerApiService) {

    }

    @Get()
    public async analyze(): Promise<any> {
        return await this.service.analyzeID();
    }

}
