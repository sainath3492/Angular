import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createairline',
  templateUrl: './createairline.component.html',
  styleUrls: ['./createairline.component.css']
})
export class CreateairlineComponent implements OnInit {
  data:any={}
  submit(){
    console.log(this.data);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
