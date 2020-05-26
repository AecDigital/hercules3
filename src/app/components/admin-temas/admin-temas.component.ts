import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AdminTemasService } from '../../shared/services/admin-temas.service';
import { AdminTema } from '../../shared/models/admin-tema.model';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTemaDialogComponent } from '../dialogs/delete-tema-dialog/delete-tema-dialog.component';
import {ExportExcelService} from '../../shared/services/export-excel.service';

@Component({
  selector: 'app-admin-temas',
  templateUrl: './admin-temas.component.html',
})
export class AdminTemasComponent implements OnInit {

  @Output() showFooter = new EventEmitter<boolean>();

  temas: any;
  showCreate: boolean;
  showEdit: boolean;
  showEditIndex: number;
  showComponent: boolean;
  orderBy: string;

  constructor(private restService: AdminTemasService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private exportExcelService: ExportExcelService) { }

  ngOnInit(): void {
    this.getTemas();
    this.showCreate = false;
    this.showEdit = false;
    this.showComponent = true;
    this.setDefaultOrder();
  }

  setRefresh() {
    this.setCloseCreate();
    this.setCloseEdit();
    this.setDefaultOrder();
    this.getTemas();
  }

  setShowCreate(){
    this.showCreate = !this.showCreate;
    this.setCloseEdit();
  }

  setCloseCreate() {
    this.showCreate = false;
  }

  setShowEdit(index: number){
    this.setCloseCreate();
    this.showEdit = !this.showEdit;
    this.showEditIndex = index;
    if (!this.showEdit) {
      this.showEditIndex = null;
    }
  }

  setCloseEdit() {
    this.showEdit = false;
    this.showEditIndex = null;
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

  setDefaultOrder() {
    this.orderBy = 'asc';
  }

  exportAsExcel() {
    const exportData = [];
    this.temas.forEach(e => {
      exportData.push({Nombre: e.nombre});
    });
    console.log(exportData);
    this.exportExcelService.exportAsExcelFile(exportData, 'Temas');
  }

  showSnackBar = (message: string, action: string) => {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  getTemas() {
    this.restService.getTemas()
      .subscribe(data => {
        this.temas = data;
      });
  }

  createTema(tema: string) {
    const creatingTema = { nombre: tema};

    this.restService.createTema(creatingTema)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            this.showSnackBar('Tema creado correctamente', '');
            this.setShowCreate();
            this.getTemas();
          } else if (data.status !== 200) {
            this.showSnackBar('Ha ocurrido un error. Vuelva a intentarlo o inténtelo más tarde.', '');
          }
        },
        error => {
          alert(error);
        });
  }

  editTema(id: number, updatedTema: string) {
    const editedTema = {idTema: id, nombre: updatedTema};

    this.restService.updateTema(editedTema)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            this.showSnackBar('Tema actualizado correctamente', '');
            this.getTemas();
            this.setShowEdit(this.showEditIndex);
          } else if (data.status !== 200) {
            this.showSnackBar('Ha ocurrido un error. Vuelva a intentarlo o inténtelo más tarde.', '');
            this.getTemas();
            this.setShowEdit(this.showEditIndex);
          }
        },
        error => {
          alert(error);
        });
  }

  deleteTema(tema: AdminTema) {
    const dialogRef = this.dialog.open(DeleteTemaDialogComponent, {
      data: {
        datos: tema
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ELIMINADO'){
        this.showSnackBar('Tema eliminado correctamente', '');
        this.getTemas();
      } else if (result === 'CERRADO' || result === undefined) {
        this.showSnackBar('El usuario ha cancelado el proceso.', '');
      } else {
        this.showSnackBar('Ha ocurrido un error. Vuelva a intentarlo o inténtelo más tarde.', '');
      }
    });
  }
}
