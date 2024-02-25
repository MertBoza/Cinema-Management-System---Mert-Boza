import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private validCredentials = [
      { email: 'username@email.com', password: 'yourpassword' }
    ];
  
    login(credentials: { email: string; password: string }): Observable<boolean> {
      return of(this.isValidCredentials(credentials)).pipe(delay(1000));
    }
  
    private isValidCredentials(credentials: { email: string; password: string }): boolean {
      return this.validCredentials.some(
        (validCreds) => validCreds.email === credentials.email && validCreds.password === credentials.password
      );
    }
  }
  