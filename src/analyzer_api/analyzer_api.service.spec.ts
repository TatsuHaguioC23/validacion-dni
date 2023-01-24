import { Test, TestingModule } from '@nestjs/testing';
import { AnalyzerApiService } from './analyzer_api.service';

describe('AnalyzerApiService', () => {
  let service: AnalyzerApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyzerApiService],
    }).compile();

    service = module.get<AnalyzerApiService>(AnalyzerApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
