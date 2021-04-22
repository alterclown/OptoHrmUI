import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TrainingSession } from '../models/trainingSession';

@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService {
  constructor(private httpClient: HttpClient) {
  }
  formData: TrainingSession;
  readonly rootURL = 'https://localhost:44306/api/';

  postTrainingSession(formData) {
    return this.httpClient.post(this.rootURL + 'TrainingSession/PostTrainingSession', formData);
  }
  putTrainingSession(TrainingSessionId,data) {
    return this.httpClient.put(this.rootURL + 'TrainingSession/PutTrainingSession/'+ TrainingSessionId,data);
  }
  deleteTrainingSession(TrainingSessionId: number) {
    return this.httpClient.delete(this.rootURL +'TrainingSession/DeleteById/'+ TrainingSessionId);
  }

  getTrainingSession(){
    return this.httpClient.get(this.rootURL + 'TrainingSession/GetTrainingSessionList');
  }
  getTrainingSessionId(TrainingSessionId) {
    return this.httpClient.get(this.rootURL +'TrainingSession/GetTrainingSessionById/'+ TrainingSessionId);
  }
}
