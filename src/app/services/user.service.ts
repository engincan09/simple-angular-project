import { environment } from './../../environments/environment';
import { ResultModel } from './../models/user/result.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  environment = environment;
  constructor(private httpService:HttpClient) { }

  getAllUser():Observable<ResultModel>{
    return  this.httpService.get<ResultModel>(this.environment.api+"?results=5");
  }
}
