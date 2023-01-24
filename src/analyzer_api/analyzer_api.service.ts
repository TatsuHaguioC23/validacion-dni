import { Injectable } from '@nestjs/common';

import { join } from 'path';

const IDAnalyzer = require("idanalyzer");

@Injectable()
export class AnalyzerApiService {
    CoreAPI: any;

    constructor() {
        this.CoreAPI = new IDAnalyzer.CoreAPI("5nBZSCWt9TYOFgiHPKRULb1ARGwBKXMS","US");

        this.CoreAPI.enableAuthentication(true, "2");
        //this.CoreAPI.checkExpiry(true);
        //this.CoreAPI.enableAMLCheck(true);
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
