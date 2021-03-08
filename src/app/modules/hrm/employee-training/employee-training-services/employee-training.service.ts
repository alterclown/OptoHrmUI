import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EmployeeTraining } from '../models/employeeTraining';


@Injectable({
  providedIn: 'root'
})
export class EmployeeTrainingService {
  constructor(private httpClient: HttpClient) {
  }
  _employeeTrainingList: EmployeeTraining[] = [];
  formData: EmployeeTraining;
  readonly rootURL = 'https://localhost:44306/api/';

  postTraining(formData) {
    return this.httpClient.post(this.rootURL + 'Training/PostTraining', formData);
  }
  putTraining(TrainingId, data) {
    return this.httpClient.put(this.rootURL + 'Training/PutTraining/'+ TrainingId, data);
  }
  deleteTraining(trainingId: number) {
    return this.httpClient.delete(this.rootURL +'Training/DeleteById/'+ trainingId);
  }

  getTraining(){
    return this.httpClient.get(this.rootURL + 'Training/GetTrainingList');
  }
  getTrainingId(trainingId) {
    return this.httpClient.get(this.rootURL +'Training/GetTrainingById/'+ trainingId);
  }
  
}