import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios(): any {
    const params = new HttpParams().append("page", "2");
    return this.http.get("https://reqres.in/api/user", { params });
  }
}
