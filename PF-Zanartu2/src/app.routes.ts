import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'alumnos',
    loadComponent: () =>
      import('./app/features/alumnos/store/alumnos.component')
        .then(m => m.AlumnosComponent)
  },
  {
    path: 'cursos',
    loadComponent: () =>
      import('./app/features/cursos/store/cursos.component')
        .then(m => m.CursosComponent)
  },
  {
    path: 'clases',
    loadComponent: () =>
      import('./app/features/clases/store/clases.component')
        .then(m => m.ClasesComponent)
  },
  { path: '', redirectTo: '/alumnos', pathMatch: 'full' },
  { path: '**', redirectTo: '/alumnos' }
];
