import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../services/service.service';
import {RepositoryService} from '../../services/repository.service';
import {Observable} from 'rxjs';
import {UserInfo} from '../../interfaces/interface';

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository-info.component.html',
  styleUrls: ['./repository-info.component.scss']
})
export class RepositoryInfoComponent implements OnInit {

  repositoryInfo$: Observable<UserInfo>;
  isDownName: boolean;
  isDownTime: boolean;
  categoryValue: any;

  constructor(
    private reposService: RepositoryService,
    private service: ServiceService
  ) {
  }

  ngOnInit(): void {
    this.repositoryInfo$ = this.service.userInfo$;
  }

  createRepos(): void {
    this.reposService.createRepos();
  }

  deleteRepos(data): void {
    this.reposService.deleteRepos(data);
    this.service.getSessionStorage();
  }

  sendCategory(category: string): void {
    this.categoryValue = category;
  }
}
