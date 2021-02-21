import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BaseUserInfoComponent } from './components/base-user-info/base-user-info.component';
import { RepositoryInfoComponent } from './components/repository-info/repository-info.component';
import {BootstrapIconsModule} from 'ng-bootstrap-icons';
import {allIcons} from 'ng-bootstrap-icons/icons';
import {SortDirective} from './directives/sort.directive';
import { CreateRepositoryFormsComponent } from './components/create-repository-forms/create-repository-forms.component';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    BaseUserInfoComponent,
    RepositoryInfoComponent,
    SortDirective,
    CreateRepositoryFormsComponent,
    FilterByCategoryPipe,
  ],
  imports: [
    BootstrapIconsModule.pick(allIcons),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
