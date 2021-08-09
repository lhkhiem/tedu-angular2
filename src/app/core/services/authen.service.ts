import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { SystemConstants } from '../common/system.constants';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggedInUser } from '../domain/loggedin.user';


@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private _http: HttpClient) { }

  login(username: string, password: string){
    const body={
          'userName':encodeURIComponent(username),
          'password':encodeURIComponent(password)
        }

    let httpOptions = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this._http.post(SystemConstants.BASE_API + 
      '/api/users/authenticate', body,httpOptions).pipe(catchError(this.handleError));
  }
  logout() {

  }
  isUserAuthenticated(): boolean {
    return true;
  }
  getLoggedInUser(): any {
    return null;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
