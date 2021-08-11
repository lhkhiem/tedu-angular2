import { Component, OnInit, AfterViewInit, ElementRef  } from '@angular/core';
import { SystemConstants } from '../core/common/system.constants';
import { UtilityService } from '../core/services/utility.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,AfterViewInit {
  constructor(private elementRef: ElementRef, private utilityService:UtilityService) {

  }
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/demo.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem(SystemConstants.CURRENT_USER);
  this.utilityService.navigateToLogin();
}
}
