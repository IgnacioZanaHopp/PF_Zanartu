import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h2>Lista de Cursos</h2>
    <ul>
      <li *ngFor="let curso of cursos">{{ curso.nombre }}</li>
    </ul>
  `,
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/cursos')
      .subscribe(data => {
        this.cursos = data;
      });
  }
}
