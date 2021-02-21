import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-base-user-info',
  templateUrl: './base-user-info.component.html',
  styleUrls: ['./base-user-info.component.scss']
})
export class BaseUserInfoComponent implements OnInit {

  mainUserInfo;
  reposNumber;
  userInfo;

    constructor(
    private service: ServiceService
  ) {
      this.service.getLocalStorage();
    }

  ngOnInit(): void {
    this.service.userInfo.subscribe((data) => {
      this.userInfo = data;
      this.reposNumber = this.userInfo.length;
      const ownerInfo = [...new Map(this.userInfo.map(user => [user.owner.login, user.owner])).values()];
      this.mainUserInfo = ownerInfo[0];
    });
  }

}
