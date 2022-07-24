import { ResultModel } from './../../models/user/result.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  resultModel:ResultModel = new ResultModel();
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe((res)=>{
      this.resultModel = res;            
    });
  }

}
