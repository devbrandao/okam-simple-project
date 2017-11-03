import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor (
    private http: Http
  ) {}

  getQuestions() {
    return this.http.get(`http://localhost:3000/questions`)
      .map((res:Response) => res.json());
  }
}
