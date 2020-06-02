import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { H3SearchDialogComponent } from '../h3-search-dialog/h3-search-dialog.component';
import { H3SearchTreeDialogComponent } from '../h3-search-tree-dialog/h3-search-tree-dialog.component';


@Component({
  selector: 'app-h3-filter-box',
  templateUrl: './h3-filter-box.component.html',
  styleUrls: ['./h3-filter-box.component.scss'],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ]
})
export class H3FilterBoxComponent implements OnInit {
  @Input()
  filterType: string = '';
  selectedOptions: Array<string> = [];

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<H3SearchTreeDialogComponent>) { }

  ngOnInit(): void {
  }

  openSearchDialog(searchType: string) {
    this.selectedOptions = [];
    const dialogRef = this.dialog.open(H3SearchTreeDialogComponent, {
      data: {
        searchType: searchType
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
      this.selectedOptions = res.data;
      console.log(this.selectedOptions) // received data from confirm-component
      }
    })
  }
}
