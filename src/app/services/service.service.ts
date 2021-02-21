import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  public error$ = new BehaviorSubject(null);
  private userInfo = new BehaviorSubject(null);
  userInfo$ = this.userInfo.asObservable();

  constructor(private http: HttpClient,
  ) {}

  getByUserName(userName: string): Observable<any> {
    return this.http.get(`${environment.url}users/${userName}/repos`);
  }

  setUserName(userName): void {
    this.getByUserName(userName).pipe(
      map(data => {
        return ({
          reposCount: data.length,
          ownerInfo: [...new Map(data.map(user => [user.owner.login, user.owner])).values()],
          fullInfo: data,
          uniqueLanguages: [...new Set(data.map(user => user.language).filter(i => !!i))]
        });
      }),
      tap((data) => {
        this.userInfo.next(data);
        this.error$.next(null);
        sessionStorage.setItem('userInfo', JSON.stringify(data));
      }),
      catchError((err: HttpErrorResponse)  => {
        this.error$.next(err);
        return throwError(err);
      })
    ).subscribe(data => {
      }
    );
  }

  getSessionStorage(): void {
    this.userInfo.next(JSON.parse(sessionStorage.getItem('userInfo')));
  }

  addRepos(data): void {
    const localData = JSON.parse(sessionStorage.getItem('userInfo'));
    const setData = {
      fullInfo: [...localData.fullInfo, data],
      ownerInfo: localData.ownerInfo,
      reposCount: localData.fullInfo.length + 1,
      uniqueLanguages: localData.uniqueLanguages
    };
    sessionStorage.setItem('userInfo', JSON.stringify(setData));
  }
}
