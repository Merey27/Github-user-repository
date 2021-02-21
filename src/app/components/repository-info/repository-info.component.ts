import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository-info.component.html',
  styleUrls: ['./repository-info.component.scss']
})
export class RepositoryInfoComponent implements OnInit {

  repositoryInfo;
  isDown: boolean;

  constructor(
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.service.userInfo.subscribe(data => {
      this.repositoryInfo = data;
    });
  }
}
