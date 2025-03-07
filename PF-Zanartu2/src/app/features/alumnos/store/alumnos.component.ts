import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h2>Lista de Alumnos</h2>
    <ul>
      <li *ngFor="let alumno of alumnos">{{ alumno.nombre }}</li>
    </ul>
  `,
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  alumnos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/alumnos')
      .subscribe(data => {
        this.alumnos = data;
      });
  }
}
