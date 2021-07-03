import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
			.get<Response>("https://reqres.in/api/user", { params, headers })
			.pipe(map((resp) => resp.data));
	}
}
