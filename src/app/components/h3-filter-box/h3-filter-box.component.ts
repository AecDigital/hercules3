import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { H3SearchDialogComponent } from '../h3-search-dialog/h3-search-dialog.component';


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
export class H3FilterBoxComponent implements OnInit, OnChanges {
  @Input()
  filterType: string = '';

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<H3SearchDialogComponent>) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.filterType);
  }

  openSearchDialog(searchType: string) {
    const dialogRef = this.dialog.open(H3SearchDialogComponent, {
      data: {
        searchType: searchType
      }
    });
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = {
    //   searchType: searchType
    // };
    // this.dialog.open(H3SearchDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res.data) // received data from confirm-component
    })
  }
}
