import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.dataSource";
@Injectable()
export class AuthService{
    constructor(private dataSource:RestDataSource){}
    authenticate(usernmae:string,password:string):Observable<boolean>{
        return this.dataSource.authenticate(usernmae,password);
    }
    get authenticated():boolean{
        return this.dataSource.auth_token !=null;
    }
    clear(){
        this.dataSource.auth_token = null;
    }
}