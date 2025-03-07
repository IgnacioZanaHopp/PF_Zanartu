import { Injectable, Inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AlumnosService } from './alumnos.service';
import * as AlumnosActions from './app.actions';  // ✅ Asegura que la ruta es correcta

@Injectable()
export class AlumnosEffects {
  constructor(@Inject(Actions) private actions$: Actions, private alumnosService: AlumnosService) {}

  loadAlumnos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlumnosActions.loadAlumnos),
      mergeMap(() =>
        this.alumnosService.getAlumnos().pipe(
          map(alumnos => AlumnosActions.loadAlumnosSuccess({ alumnos })),
          catchError(error => of(AlumnosActions.loadAlumnosFailure({ error })))
        )
      )
    )
  );
}
