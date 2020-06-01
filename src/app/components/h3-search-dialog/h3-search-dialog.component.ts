import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { H3FilterBoxService } from '../../shared/services/h3-filter-box.service';


@Component({
  selector: 'app-h3-search-dialog',
  templateUrl: './h3-search-dialog.component.html',
  styleUrls: ['./h3-search-dialog.component.scss']
})
export class H3SearchDialogComponent implements OnInit {
  @Input()
  searchType: string;
  data: any;
  searchOptions: any;
  optionsSelected: Array<any> = [];
  @Output()
  propagar = new EventEmitter<Array<any>>();

  constructor(private filterBox: H3FilterBoxService, private dialogRef: MatDialogRef<H3SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      console.log(data);
      this.searchType = data.searchType;
    }

  ngOnInit(): void {
    console.log(this.searchType);
    this.getSearchOptions(this.searchType);
  }

  getSearchOptions = (searchType: string) => {
    if (searchType === 'Clientes') {
      this.filterBox.getCustomers().subscribe(res => {
        this.data = res.body;
        console.log(this.data);
      })
    } else if (searchType === 'Ofertas') {
      const provincias = [];
      this.filterBox.getProposals().subscribe(res => {
        this.data = res.body;
        this.data.map()
        console.log(this.data);
      })
    } else if (searchType === 'Empresas') {
      this.filterBox.getCompanies().subscribe(res => {
        this.data = res.body;
        this.data.map()
        console.log(this.data);
      })
    }
  }

  makeSelection = (selectionId) => {
    this.optionsSelected.push(selectionId);
    this.propagar.emit(this.optionsSelected);
    console.log(this.optionsSelected);
  }

  confirm() {
    this.dialogRef.close({ data: this.optionsSelected }) // send data to parent component
  }

}
