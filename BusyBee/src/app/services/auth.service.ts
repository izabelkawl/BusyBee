import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { SessionStorageKeys } from "../shared/enums/sessions-storage.enum";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUser: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private httpClient: HttpClient) {
        this.currentUser.next(localStorage.getItem(SessionStorageKeys.USER))
    }

    public logout(): void {
        localStorage.removeItem(SessionStorageKeys.USER)
        this.currentUser.next(null);
    }

    public setUser(user: any): void {
        this.currentUser.next(user)
        localStorage.setItem(SessionStorageKeys.USER, JSON.stringify(user));
    }

    public get user(): any {
        return this.currentUser.value;
    }

    public login(email: string,password: string): Observable<any> {
        return this.httpClient.post('https://lipadev.bieda.it/', { email, password});
    }
}