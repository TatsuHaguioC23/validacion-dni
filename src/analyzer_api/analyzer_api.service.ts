import { Injectable } from '@nestjs/common';

import { join } from 'path';

const IDAnalyzer = require("idanalyzer");

@Injectable()
export class AnalyzerApiService {
    CoreAPI: any;

    constructor() {
        this.CoreAPI = new IDAnalyzer.CoreAPI("API_KEY","US");

        this.CoreAPI.enableAuthentication(true, "2");
    }

    public async analyzeID() {
        const pathToSampleFace = join(process.cwd(), 'public/sampleface.png');
        const pathToSampleId = join(process.cwd(), 'public/sampleid.jpg');

        let response = await this.CoreAPI.scan({ 
            document_primary: pathToSampleId, 
            biometric_photo: pathToSampleFace 
        });

        return response;
    }
}
