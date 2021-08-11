import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SystemConstants } from '../core/common/system.constants';
import { AuthenService } from '../core/services/authen.service';
import { Router, RouterModule } from '@angular/router';
import { UrlConstants } from '../core/common/url.constants';
import { MessageContstants } from '../core/common/message.constants';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  user: any = {};
  constructor(
    private authenService: AuthenService,
    private router: Router,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {

  }
  login(f: NgForm) {
    this.authenService.login(this.model.username, this.model.password)
      .subscribe((data: any) => {
        this.user = data;
        if (data.error == null) {
          //set token vao localstored
          localStorage.removeItem(SystemConstants.CURRENT_USER);
          localStorage.setItem(SystemConstants.CURRENT_USER, data.tokenString);
          //chuyen huong ve home
          this.router.navigate([UrlConstants.HOME]);
        }
        else{
          this.notificationService.printErrorMessage(MessageContstants.LOGIN_FAIL);
        }
      })

  }

}
