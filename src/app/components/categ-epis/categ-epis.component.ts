import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CategEpisService } from '../../shared/services/categ-epis.service';
import { CategEpis } from '../../shared/models/categ-epis.model';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategEpiDialogComponent } from '../dialogs/delete-categ-epi-dialog/delete-categ-epi-dialog.component';
import {ExportExcelService} from '../../shared/services/export-excel.service';

@Component({
  selector: 'app-categ-epis',
  templateUrl: './categ-epis.component.html',
  styleUrls: ['./categ-epis.component.scss']
})
export class CategEpisComponent implements OnInit {
  @Output() showFooter = new EventEmitter<boolean>();

  categorias: CategEpis;
  showCreate: boolean;
  showEdit: boolean;
  showEditIndex: number;
  showComponent: boolean;
  orderBy: string;

  constructor(private restService: CategEpisService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private exportExcelService: ExportExcelService) { }

  ngOnInit(): void {
    this.getCategorias();
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
    this.getCategorias();
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
    const exportData = this.categorias;
    this.exportExcelService.exportAsExcelFile(exportData, 'CategoriasEpis');
  }

  showSnackBar = (message: string, action: string) => {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  getCategorias() {
    this.restService.getCategorias()
      .subscribe(data => {
        this.categorias = data;
      });
  }

  createCategoria(categoria: string) {
    const creatingCategoria = { nombre: categoria};

    this.restService.createCategoria(creatingCategoria)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            this.showSnackBar('Categoría creada correctamente', '');
            this.setShowCreate();
            this.getCategorias();
          } else if (data.status !== 200) {
            this.showSnackBar('Ha ocurrido un error. Vuelva a intentarlo o inténtelo más tarde.', '');
          }
        },
        error => {
          alert(error);
        });
  }

  editCategoria(id: number, updatedCategoria: string) {
    const editedCategoria = {idCategoria: id, nombre: updatedCategoria};

    this.restService.updateCategoria(editedCategoria)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            this.showSnackBar('Categoría actualizada correctamente', '');
            this.getCategorias();
            this.setShowEdit(this.showEditIndex);
          } else if (data.status !== 200) {
            this.showSnackBar('Ha ocurrido un error. Vuelva a intentarlo o inténtelo más tarde.', '');
            this.getCategorias();
            this.setShowEdit(this.showEditIndex);
          }
        },
        error => {
          alert(error);
        });
  }

  deleteCategoria(categoria: CategEpis) {
    const dialogRef = this.dialog.open(DeleteCategEpiDialogComponent, {
      data: {
        datos: categoria
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ELIMINADO'){
        this.showSnackBar('Categoría eliminada correctamente', '');
        this.getCategorias();
      } else if (result === 'CERRADO' || result === undefined) {
        this.showSnackBar('El usuario ha cancelado el proceso.', '');
      } else {
        this.showSnackBar('Ha ocurrido un error. Vuelva a intentarlo o inténtelo más tarde.', '');
      }
    });
  }

}
