import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpHeaders,
	HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class InterceptorService implements HttpInterceptor {
	intercept(
		req: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const headers = new HttpHeaders({
			"token-usuario": "ABC123abc123",
		});

		const reqClone = req.clone({ headers });

		return next.handle(reqClone).pipe(catchError(this.manejarError));
	}

	manejarError(error: HttpErrorResponse): Observable<never> {
		console.log("Sucedió un error.");
		console.warn(error);
		return throwError("Esto es el throwError");
	}
}
