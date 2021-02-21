import {Injectable} from '@angular/core';
import {CreateRepositoryFormsComponent} from '../components/create-repository-forms/create-repository-forms.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(
    private modalService: NgbModal,
  ) {
  }

  createRepos(): void {
    this.modalService.open(CreateRepositoryFormsComponent, {centered: true, size: 'lg'});
  }

  deleteRepos(data): void {
    const localData = JSON.parse(sessionStorage.getItem('userInfo'));
    const filteredData = localData.fullInfo.filter(el => el.id !== data.id);
    const setData = {
      fullInfo: filteredData,
      ownerInfo: localData.ownerInfo,
      reposCount: localData.fullInfo.length - 1,
      uniqueLanguages: localData.uniqueLanguages
    };
    sessionStorage.setItem('userInfo', JSON.stringify(setData));
  }
}
