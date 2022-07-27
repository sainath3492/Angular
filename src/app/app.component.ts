import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightServices';

  constructor(private router:Router) { }

  Redirect(pagename:string):void{
    this.router.navigate([`${pagename}`]);
  }
}


