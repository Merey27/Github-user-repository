import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-create-repository-forms',
  templateUrl: './create-repository-forms.component.html',
  styleUrls: ['./create-repository-forms.component.scss']
})
export class CreateRepositoryFormsComponent implements OnInit {

  form: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    public service: ServiceService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      html_url: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      language: new FormControl(null, Validators.required),
      created_at: new FormControl(null, Validators.required)
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.form.value.created_at = new Date();
    this.form.value.id = JSON.parse(sessionStorage.getItem('userInfo'))
      .fullInfo.length + 1;
    this.service.addRepos(this.form.value);
    this.service.getSessionStorage();
    this.activeModal.close();
  }
}
