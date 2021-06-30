import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios(): any {
    let params = new HttpParams().append("page", "2");
    params = params.append("nombre", "Pedro Pérez");

    const headers = new HttpHeaders({
      "token-usuario": "ABC123abc123",
    });

    return this.http.get("https://reqres.in/api/user", { params, headers });
  }
}
