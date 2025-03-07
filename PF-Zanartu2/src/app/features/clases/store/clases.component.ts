import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clases',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h2>Lista de Clases</h2>
    <ul>
      <li *ngFor="let clase of clases">{{ clase.nombre }}</li>
    </ul>
  `,
  styleUrls: ['./clases.component.scss']
})
export class ClasesComponent implements OnInit {
  clases: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/clases')
      .subscribe(data => {
        this.clases = data;
      });
  }
}
