import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, Input, Inject } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { H3FilterBoxService } from '../../shared/services/h3-filter-box.service';

export class TodoItemNode {
  children: TodoItemNode[];
  nombre: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  children: Array<TodoItemNode>;
  idProvincia: number;
  nombre: string;
  // item: string;
  level: number;
  expandable: boolean;
}

@Injectable()
export class ChecklistDatabase {
  searchType: string;
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);
  get data(): TodoItemNode[] { return this.dataChange.value; }
  tempData: any;

  constructor(private filterBox: H3FilterBoxService,
    @Inject(MAT_DIALOG_DATA) data) {
    this.searchType = data.searchType;
    this.initialize();
  }

  initialize() {
    this.getSearchOptions(this.searchType);
  }

  getSearchOptions = (searchType: string) => {
    console.log(this.searchType);
      this.filterBox.getOptions(searchType).subscribe(res => {
        this.tempData = res.body;
        this.dataChange.next(this.tempData);        
      })
    }
    
}

@Component({
  selector: 'h3-search-tree-dialog',
  templateUrl: 'h3-search-tree-dialog.component.html',
  styleUrls: ['h3-search-tree-dialog.component.scss'],
  providers: [ChecklistDatabase]
})
export class H3SearchTreeDialogComponent {
  optionsSelected: Array<string> = [];

 /** Map from flat node to nested node. This helps us finding the nested node to be modified */
 flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

 /** Map from nested node to flattened node. This helps us to keep the same object for selection */
 nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

 /** A selected parent node to be inserted */
 selectedParent: TodoItemFlatNode | null = null;

 /** The new item's name */
 newItemName = '';

 treeControl: FlatTreeControl<TodoItemFlatNode>;

 treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

 dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

 /** The selection for checklist */
 checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

 constructor(private _database: ChecklistDatabase, private dialogRef: MatDialogRef<H3SearchTreeDialogComponent>) {
   this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
     this.isExpandable, this.getChildren);
   this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
   this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

   _database.dataChange.subscribe(data => {
     this.dataSource.data = data;
   });
 }

 getLevel = (node: TodoItemFlatNode) => node.level;

 isExpandable = (node: TodoItemFlatNode) => node.expandable;

 getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;

 hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

 hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.nombre === '';

 /**
  * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
  */
 transformer = (node: TodoItemNode, level: number) => {
   const existingNode = this.nestedNodeMap.get(node);
   const flatNode = existingNode && existingNode.nombre === node.nombre
       ? existingNode
       : new TodoItemFlatNode();
   flatNode.nombre = node.nombre;
   flatNode.level = level;
   flatNode.expandable = !!node.children;
   this.flatNodeMap.set(flatNode, node);
   this.nestedNodeMap.set(node, flatNode);
   return flatNode;
 }

 /** Whether all the descendants of the node are selected. */
 descendantsAllSelected(node: TodoItemFlatNode): boolean {
   const descendants = this.treeControl.getDescendants(node);
   const descAllSelected = descendants.every(child =>
     this.checklistSelection.isSelected(child)
   );
   return descAllSelected;
 }

 /** Whether part of the descendants are selected */
 descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
   const descendants = this.treeControl.getDescendants(node);
   const result = descendants.some(child => this.checklistSelection.isSelected(child));
   return result && !this.descendantsAllSelected(node);
 }

 /** Toggle the to-do item selection. Select/deselect all the descendants node */
 todoItemSelectionToggle(node: TodoItemFlatNode): void {
   this.checklistSelection.toggle(node);
   const descendants = this.treeControl.getDescendants(node);
   this.checklistSelection.isSelected(node)
     ? this.checklistSelection.select(...descendants)
     : this.checklistSelection.deselect(...descendants);

   // Force update for the parent
   descendants.every(child =>
     this.checklistSelection.isSelected(child)
   );
   this.checkAllParentsSelection(node);
 }

 /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
 todoLeafItemSelectionToggle(node: TodoItemFlatNode): void {
   this.checklistSelection.toggle(node);
   this.checkAllParentsSelection(node);
 }

 /* Checks all the parents when a leaf node is selected/unselected */
 checkAllParentsSelection(node: TodoItemFlatNode): void {
   let parent: TodoItemFlatNode | null = this.getParentNode(node);
   while (parent) {
     this.checkRootNodeSelection(parent);
     parent = this.getParentNode(parent);
   }
 }

 /** Check root node checked state and change it accordingly */
 checkRootNodeSelection(node: TodoItemFlatNode): void {
   const nodeSelected = this.checklistSelection.isSelected(node);
   const descendants = this.treeControl.getDescendants(node);
   const descAllSelected = descendants.every(child =>
     this.checklistSelection.isSelected(child)
   );
   if (nodeSelected && !descAllSelected) {
     this.checklistSelection.deselect(node);
   } else if (!nodeSelected && descAllSelected) {
     this.checklistSelection.select(node);
   }
 }

 /* Get the parent node of a node */
 getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null {
   const currentLevel = this.getLevel(node);

   if (currentLevel < 1) {
     return null;
   }

   const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

   for (let i = startIndex; i >= 0; i--) {
     const currentNode = this.treeControl.dataNodes[i];

     if (this.getLevel(currentNode) < currentLevel) {
       return currentNode;
     }
   }
   return null;
 }


confirm() {
  this.dialogRef.close({ data: this.checklistSelection.selected.filter(e => e.level === 2) }) // send data to parent component
}
}
