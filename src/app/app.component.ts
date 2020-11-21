import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webApplication';

  //
  opened: Boolean = false;
  sendDataToChild: Boolean = false;
  showLoginComp: Boolean = false;

  constructor() {
    console.log("app compon constructor")
   }

  ngOnInit(): void {
    console.warn("ng init of app comp")
   }

  
  //this method will be triggered from child component - header 
  updateLoginFlag(showLoginComp) {
    this.showLoginComp = showLoginComp;
    this.sendDataToChild = showLoginComp;
  }

}
