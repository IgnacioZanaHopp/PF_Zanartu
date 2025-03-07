import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {
  private apiUrl = 'http://localhost:3000/clases';  //  Asegurar que el backend está corriendo

  constructor(private http: HttpClient) {}

  getClases(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
