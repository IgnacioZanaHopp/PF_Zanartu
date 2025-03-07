import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

const routes: Routes = [{ path: '', component: CursosComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), CursosComponent],
  exports: [RouterModule]
})
export class CursosModule {}
