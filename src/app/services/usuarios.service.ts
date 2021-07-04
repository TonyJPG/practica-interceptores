import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
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

		return this.http
			.get<Response>("https://reqres.in/api/user", { params })
			.pipe(map((resp) => resp.data));
	}
}
