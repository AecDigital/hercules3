import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
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
  optionsSelected: Array<string> = [];
  isDisabled = false;
  temaIsSelected = false;

  constructor(private filterBox: H3FilterBoxService, private dialogRef: MatDialogRef<H3SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.searchType = data.searchType;
    }

  ngOnInit(): void {
    this.getSearchOptions(this.searchType);
  }

  getSearchOptions = (searchType: string) => {
    console.log(this.searchType);
      this.filterBox.getOptions(searchType).subscribe(res => {
        this.data = res.body;
      })
  }

  makeSelection = (selectedProvincia, selectedTema?: string, selectedOferta?: string) => {
    console.log(selectedProvincia, selectedTema, selectedOferta);
    let provincia = this.data.filter(e => e.idProvincia === selectedProvincia)
    console.log(provincia)
    if (selectedOferta) {
      this.optionsSelected.push(selectedOferta)
    } else if (selectedTema) {
      this.temaIsSelected = !this.temaIsSelected;
      let tema = provincia[0].children.filter(f => f.nombre === selectedTema)
       tema[0].children.map(g => { 
         this.optionsSelected.push(g.nombre)
         console.log(this.optionsSelected);
        })
    } else {
      this.isDisabled = true;
      provincia[0].children.map(f => f.children.map(g => {
      this.optionsSelected.push(g.nombre)}));
      console.log(this.optionsSelected);
    }
  }

  confirm() {
    this.dialogRef.close({ data: this.optionsSelected }) // send data to parent component
  }

}
