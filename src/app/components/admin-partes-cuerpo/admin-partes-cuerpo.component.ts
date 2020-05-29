import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AdminPartesCuerpo } from 'src/app/shared/models/admin-partes-cuerpo.model';
import { AdminPartesCuerpoService } from 'src/app/shared/services/admin-partes-cuerpo.service';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTemaDialogComponent } from '../dialogs/delete-tema-dialog/delete-tema-dialog.component';
import {ExportExcelService} from '../../shared/services/export-excel.service';
import { Observable } from 'rxjs';
import { DeletePartesCuerpoDialogComponent } from '../dialogs/delete-partes-cuerpo-dialog/delete-partes-cuerpo-dialog.component';
@Component({
  selector: 'app-admin-partes-cuerpo',
  templateUrl: './admin-partes-cuerpo.component.html',
})
export class AdminPartesCuerpoComponent implements OnInit {

  @Output() showFooter = new EventEmitter<boolean>();
  parteCuerpo: AdminPartesCuerpo;
  showCreate: boolean;
  showEdit: boolean;
  showEditIndex: number;
  showComponent: boolean;
  orderBy: string;

  constructor(private restService: AdminPartesCuerpoService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private exportExcelService: ExportExcelService) { }

  ngOnInit(): void {
    this.getPartesCuerpo();
    this.showCreate = false;
    this.showEdit = false;
    this.showComponent = true;
    this.orderBy = 'asc';
  }
  setRefresh() {
    this.showCreate = false;
    this.showEdit = false;
    this.showEditIndex = null;
    this.orderBy = 'asc';
    this.getPartesCuerpo();
  }

  setShowCreate(){
    this.showCreate = !this.showCreate;
    this.showEdit = false;
    this.showEditIndex = null;
  }

  setShowEdit(index: number){
    this.showCreate = false;
    this.showEdit = !this.showEdit;
    this.showEditIndex = index;
    if (!this.showEdit) {
      this.showEditIndex = null;
    }
  }

  setViewComponent() {
    this.showComponent = !this.showComponent;
    this.showFooter.emit(false);
  }

  setOrderBy() {
    this.showEdit = false;
    this.showEditIndex = null;
    if (this.orderBy === 'asc') {
      this.orderBy = 'desc';
    } else {
      this.orderBy = 'asc';
    }
  }

  exportAsExcel() {
    const exportData = this.parteCuerpo;
    this.exportExcelService.exportAsExcelFile(exportData, 'ParteCuerpo');
  }

  showSnackBar = (message: string, action: string) => {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  getPartesCuerpo() {
    this.restService.getPartesCuerpo()
      .subscribe(data => {
        this.parteCuerpo= data;
      });
  }

  createPartesCuerpo (parteCuerpo: string) {
  
    alert(parteCuerpo);
    const creatingParteCuerpo = { nombre: parteCuerpo};

    this.restService.createPartesCuerpo(creatingParteCuerpo)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            this.showSnackBar('Partes Cuerpo creado correctamente', '');
            this.setShowCreate();
            this.getPartesCuerpo();
          } else if (data.status !== 200) {
            this.showSnackBar('Ha ocurrido un error. Vuelva a intentarlo o inténtelo más tarde.', '');
          }
        },
        error => {
          alert('error '+error);
        });
  }

  editPartesCuerpo(id: number, updatePartesCuerpo: string) {
    const editedParteCuerpo = {idTema: id, nombre: updatePartesCuerpo};

    this.restService.updatePartesCuerpo(editedParteCuerpo)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            this.showSnackBar('Partes Cuerpo actualizado correctamente', '');
            this.getPartesCuerpo();
            this.setShowEdit(this.showEditIndex);
          } else if (data.status !== 200) {
            this.showSnackBar('Ha ocurrido un error. Vuelva a intentarlo o inténtelo más tarde.', '');
            this.getPartesCuerpo();
            this.setShowEdit(this.showEditIndex);
          }
        },
        error => {
          alert(error);
        });
  }

  deletePartesCuerpo(parteCuerpo: AdminPartesCuerpo) {
    const dialogRef = this.dialog.open(DeletePartesCuerpoDialogComponent, {
      data: {
        datos: parteCuerpo
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ELIMINADO'){
        this.showSnackBar('Parte Cuerpo eliminado correctamente', '');
        this.getPartesCuerpo();
      } else if (result === 'CERRADO' || result === undefined) {
        this.showSnackBar('El usuario ha cancelado el proceso.', '');
      } else {
        this.showSnackBar('Ha ocurrido un error. Vuelva a intentarlo o inténtelo más tarde.', '');
      }
    });
  }
}
