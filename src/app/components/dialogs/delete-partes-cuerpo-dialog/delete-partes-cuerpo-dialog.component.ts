import { Component, OnInit, Inject } from '@angular/core';
import { AdminPartesCuerpoInterface } from 'src/app/shared/interfaces/admin-partes-cuerpo-interface';
import { AdminPartesCuerpoService } from 'src/app/shared/services/admin-partes-cuerpo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-delete-partes-cuerpo-dialog',
  templateUrl: './delete-partes-cuerpo-dialog.component.html',
  
})
export class DeletePartesCuerpoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletePartesCuerpoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdminPartesCuerpoInterface,
    private restService: AdminPartesCuerpoService) { }

  ngOnInit(): void {
  }
  onClickYes(parteCuerpo: any) {
    this.restService.deletePartesCuerpo(parteCuerpo.idParteCuerpo)
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
