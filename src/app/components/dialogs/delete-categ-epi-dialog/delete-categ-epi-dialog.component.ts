import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//Puedo usar la misma interfaz si la estructura es similar (??)
import { AdminTemasInterface } from '../../../shared/interfaces/admin-temas-interface';
import { CategEpisService } from '../../../shared/services/categ-epis.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-delete-categ-epi-dialog',
  templateUrl: './delete-categ-epi-dialog.component.html'
})
export class DeleteCategEpiDialogComponent implements OnInit {

constructor(public dialogRef: MatDialogRef<DeleteCategEpiDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: AdminTemasInterface,
            private restService: CategEpisService) { }

  ngOnInit(): void {
  }

  onClickYes(categoria: any) {
    this.restService.deleteCategoria(categoria.idCategoria)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            this.dialogRef.close('ELIMINADA');
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
