import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  isUserInfo$;
  error$;
  userName = new FormControl('');

  constructor(
    private service: ServiceService
  ) {
    this.service.getSessionStorage();
  }

  ngOnInit(
  ): void {
    this.isUserInfo$ = this.service.userInfo$;
    this.error$ = this.service.error$;
  }

  searchUser(): void {
    this.service.setUserName(this.userName.value);
  }
}
