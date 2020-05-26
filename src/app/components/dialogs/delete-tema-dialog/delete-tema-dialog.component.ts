import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminTemasInterface } from '../../../shared/interfaces/admin-temas-interface';
import { AdminTemasService } from '../../../shared/services/admin-temas.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-delete-tema-dialog',
  templateUrl: './delete-tema-dialog.component.html'
})
export class DeleteTemaDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteTemaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AdminTemasInterface,
              private restService: AdminTemasService) { }

  ngOnInit(): void {
  }

  onClickYes(tema: any) {
    this.restService.deleteTema(tema.idTema)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            this.dialogRef.close('ELIMINADO');
          } else if (data.status !== 200) {
            this.dialogRef.close('ERROR');
          }
        },
        error => {
          this.dialogRef.close('ERROR');
        });
  }

  onClickNo(): void {
    this.dialogRef.close('CERRADO');
  }

}
