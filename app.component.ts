import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'classbinding';
  isactive:boolean=false;
  applyC1:boolean=true;

  cvar:string='blue';
  mystyle:object={
    color:'white',
    background:'gray',
    border:'5px solid blue'
  }
  haserror:boolean=true;
}
