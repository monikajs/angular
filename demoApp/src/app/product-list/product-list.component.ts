import { Component } from '@angular/core';

import { products } from '../products';
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;
data:string[]=[] ;
tableData: any = [];
displayedColumns: string[] = ['Salutation','Username', 'email', 'number', 'address'];
  dataSource;
ngOnInit(): void {
  // this.data = localStorage;
  for (var index = 0; index < localStorage.length; index++) {
    this.data.push(localStorage.key(index));
  }
  this.data.forEach(element => {
    this.tableData.push(JSON.parse(localStorage.getItem(element)
  ))});
  this.dataSource = this.tableData;
console.log('td',this.tableData);
}

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/