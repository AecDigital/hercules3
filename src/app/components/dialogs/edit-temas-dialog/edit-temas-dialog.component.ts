import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminTemasInterface } from '../../../shared/interfaces/admin-temas-interface';

@Component({
  selector: 'app-edit-temas-dialog',
  templateUrl: './edit-temas-dialog.component.html',
})
export class EditTemasDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: AdminTemasInterface) { }

  ngOnInit(): void {
  }

}
