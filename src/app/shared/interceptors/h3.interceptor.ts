import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class H3Interceptor implements HttpInterceptor {

    constructor(private aut: AuthenticationService){
  
    }

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        let test: any = '';
        this.aut.user.pipe(map(res => { test = res }));
        const userSession = JSON.parse(sessionStorage.getItem("user"));

        if (userSession) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + userSession.token)
            });
            console.log('userToken:' + userSession.token)
            console.log(test);
            return next.handle(cloned);
        }
        else {
            console.log('No tengo token, pero he pasado por el interceptor')
            return next.handle(req);
        }
    }
}