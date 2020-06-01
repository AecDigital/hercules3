import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MenuItems } from '../../shared/constants/h3MenuItems';
import { MenuItem } from 'src/app/shared/interfaces/menu-items';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-hercules3-menu',
  templateUrl: './hercules3-menu.component.html',
  styleUrls: ['./hercules3-menu.component.scss']
})


export class Hercules3MenuComponent implements OnInit, AfterViewInit {

  @Output()
  closeSidebar = new EventEmitter<boolean>();

  session: any;
  TREE_DATA: MenuItem[] = [];
  private _transformer = (node: MenuItem, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.label,
      level: level,
      linkTo: node.linkTo
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private authentication: AuthenticationService, private router: Router) { }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    this.session = JSON.parse(sessionStorage.getItem("session"));
  }

  ngAfterViewInit() {
    this.session = JSON.parse(sessionStorage.getItem("session"));
    if (this.session) {
      this.menuBuilder(this.session.usuario.rol);
    }
  }

// Build method for menu items depending on user session rol
private menuBuilder = (userRol: number) => {
  MenuItems.map(e => {
    if (e.rol === 0 || userRol >= e.rol) {
      this.TREE_DATA.push(e);
    }
  });
  this.TREE_DATA.forEach(menuItem => { 
    if (menuItem.children) {
      menuItem.children = menuItem.children.filter(subMenuItem => userRol >= subMenuItem.rol);
      menuItem.children.map(subMenuItem => {
        if (subMenuItem.children) {
          subMenuItem.children = subMenuItem.children.filter(item => userRol >= item.rol)
        }
      });
      }
  });
  this.dataSource.data = this.TREE_DATA;
};

itemNavigateTo(url: string) {
  this.closeSidebar.emit(true);
  window.scroll(0,0);
  this.router.navigate([`${url}`])
  let test: any;
  this.router.events.subscribe(evnt => test = evnt);
}

}


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  linkTo: string
}



