import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {UserInfo} from '../../interfaces/interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-base-user-info',
  templateUrl: './base-user-info.component.html',
  styleUrls: ['./base-user-info.component.scss']
})
export class BaseUserInfoComponent implements OnInit {

  mainUserInfo$: Observable<UserInfo>;

  constructor(
    private service: ServiceService
  ) {
  }

  ngOnInit(): void {
    this.mainUserInfo$ = this.service.userInfo$;
  }

}
