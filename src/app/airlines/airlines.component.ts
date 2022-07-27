import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import { DataSource } from '@angular/cdk/table';

interface student {
  position:number;
  name:string;
  email:string;
  gender:string;
}
const ELEMENT_DATA: student[] = [
  {position: 1, name: 'Hydrogen', email: "sai@gmail.com", gender: 'H'},
  {position: 2, name: 'Helium', email: "sai@gmail.com", gender: 'He'},
  {position: 3, name: 'Lithium', email: "sai@gmail.com", gender: 'Li'},
  {position: 4, name: 'Beryllium', email: "sai@gmail.com", gender: 'Be'},

];
@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'email', 'gender'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
