import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SystemConstants } from '../core/common/system.constants';
import { AuthenService } from '../core/services/authen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  data:any={};
  constructor(
    private authenService: AuthenService
  ) { }

  ngOnInit(): void {
    
  }
  login(f:NgForm) {
    this.authenService.login(this.model.username, this.model.password)
    .subscribe((data:any)=>{
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      localStorage.setItem(SystemConstants.CURRENT_USER, data.tokenString);
      console.log(data.phoneNumber);
      this.data=data;
    })
    console.log(f.value);
    
  }

}
