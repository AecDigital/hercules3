import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MenuItems } from '../../shared/constants/h3MenuItems';
import { MenuItem } from 'src/app/shared/interfaces/menu-items';
import { User } from '../../shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-hercules3-menu',
  templateUrl: './hercules3-menu.component.html',
  styleUrls: ['./hercules3-menu.component.scss']
})


export class Hercules3MenuComponent implements OnInit, AfterViewInit {

  session: any;
  TREE_DATA: MenuItem[] = [];
  private _transformer = (node: MenuItem, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.label,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private authentication: AuthenticationService) { }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    this.session = JSON.parse(sessionStorage.getItem("session"));
  }

  ngAfterViewInit() {
    this.session = JSON.parse(sessionStorage.getItem("session"));
    if (this.session.usuario) {
      this.menuBuilder(this.session.usuario.rol);
    }
  }

// Build method for menu items depending on user session rol
private menuBuilder = (userRol) => {
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
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}



