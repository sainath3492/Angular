import { Component, OnInit } from '@angular/core';
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
  selector: 'app-search-booking',
  templateUrl: './search-booking.component.html',
  styleUrls: ['./search-booking.component.css']
})
export class SearchBookingComponent implements OnInit {
title='Tickets';

headers=["PNR","From","To","Trip Type"];

rows:any=[

  {
    "PNR":"1",
    "From":"Hyderabad",
    "To":"Chennai",
    "Trip Type":"Round"
  },
  {
    "PNR":"2",
    "From":"Mumbai",
    "To":"Chennai",
    "Trip Type":"Round"
  }
];

  x:boolean=false;
  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'email', 'gender'];
  dataSource = ELEMENT_DATA;
  data:any={}
  submit(){
    console.log(this.data);
    this.x=true;
    
  }
  ngOnInit(): void {
  }

}
