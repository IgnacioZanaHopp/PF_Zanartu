import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';

const routes: Routes = [{ path: '', component: AlumnosComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosModule { }
