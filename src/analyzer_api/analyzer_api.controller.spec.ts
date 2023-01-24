import { Test, TestingModule } from '@nestjs/testing';
import { AnalyzerApiController } from './analyzer_api.controller';

describe('AnalyzerApiController', () => {
  let controller: AnalyzerApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalyzerApiController],
    }).compile();

    controller = module.get<AnalyzerApiController>(AnalyzerApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
