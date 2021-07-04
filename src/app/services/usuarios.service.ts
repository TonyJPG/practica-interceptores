import { Injectable } from "@angular/core";
import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
	HttpParams,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Datum, Response } from "../interfaces/response.interface";

@Injectable({
	providedIn: "root",
})
export class UsuariosService {
	constructor(private http: HttpClient) {}

	obtenerUsuarios(): Observable<Datum[]> {
		let params = new HttpParams().append("page", "2");
		params = params.append("nombre", "Pedro Pérez");

		const headers = new HttpHeaders({
			"token-usuario": "ABC123abc123",
		});

		return this.http
			.get<Response>("https://reqress.in/api/user", { params, headers })
			.pipe(
				map((resp) => resp.data),
				catchError(this.manejarError)
			);
	}

	manejarError(error: HttpErrorResponse): Observable<never> {
		console.log("Sucedió un error.");
		console.warn(error);
		return throwError("Esto es el throwError");
	}
}
