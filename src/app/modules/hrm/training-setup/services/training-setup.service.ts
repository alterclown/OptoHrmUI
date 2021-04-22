import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TrainingSetup } from '../models/trainingSetup';

@Injectable({
  providedIn: 'root'
})
export class TrainingSetupService {
  constructor(private httpClient: HttpClient) {
  }
  formData: TrainingSetup;
  readonly rootURL = 'https://localhost:44306/api/';

  postTrainingSetup(formData) {
    return this.httpClient.post(this.rootURL + 'TrainingSetup/PostTrainingSetup', formData);
  }
  putTrainingSetup(TrainingSetupId,data) {
    return this.httpClient.put(this.rootURL + 'TrainingSetup/PutTrainingSetup/'+ TrainingSetupId,data);
  }
  deleteTrainingSetup(TrainingSetupId: number) {
    return this.httpClient.delete(this.rootURL +'TrainingSetup/DeleteById/'+ TrainingSetupId);
  }

  getTrainingSetup(){
    return this.httpClient.get(this.rootURL + 'TrainingSetup/GetTrainingSetupList');
  }
  getTrainingSetupId(TrainingSetupId) {
    return this.httpClient.get(this.rootURL +'TrainingSetup/GetTrainingSetupById/'+ TrainingSetupId);
  }
}
