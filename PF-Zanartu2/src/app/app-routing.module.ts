import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes que quieres mostrar para cada ruta
import { AlumnosComponent } from './store/alumnos/alumnos.component';
import { CursosComponent } from './store/cursos/cursos.component';
import { ClasesComponent } from './store/clases/clases.component';
// ^ Ajusta las rutas de import a donde estén tus componentes

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'clases', component: ClasesComponent },

  // Ruta por defecto
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },

  // Ruta comodín para cuando no se encuentra nada
  { path: '**', redirectTo: 'alumnos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
