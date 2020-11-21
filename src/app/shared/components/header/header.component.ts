import { Component, OnInit } from '@angular/core';

//parent to child data transfer and this is the child comp
import { Input } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public flagShowLogoutButton: Boolean = false;
  public check: Boolean = false;
  public showClaimOption: Boolean = false;
 
  //passing data from one component to another component
  //input for catching data inside comp
  //output is for throwing data from comp
  @Input() public sendDataToChild;  //from parent to child
  @Output() updateLoginFlag: EventEmitter<Boolean> = new EventEmitter();  //from child to parent

  constructor() { 
    //console.log("header -this is flagShowLogoutButton "+this.flagShowLogoutButton)
    console.log("-------------this is constructor-----------------------")
    }

  ngOnInit(): void {
  
    if (sessionStorage.getItem("access") != null || sessionStorage.getItem("access") != undefined) {
      // this.showClaimOption = true;   
    }
    console.log("------------this is init------------------------")
    //this.updateLoginFlag.emit(this.flagForLogin)
  }

  
  toggleMenu() {
    this.check = !this.check;
  }
  
  unloadLoginComp() {
    this.flagShowLogoutButton = false;
    this.updateLoginFlag.emit(this.flagShowLogoutButton)
    sessionStorage.removeItem("access");
    sessionStorage.removeItem("refresh");
  }

  loadLoginComp() {

    if (sessionStorage.getItem("access") != null || sessionStorage.getItem("access") != undefined) {
      this.flagShowLogoutButton = true;
      this.updateLoginFlag.emit(this.flagShowLogoutButton) 
      this.showClaimOption = true;
    }
    //this.flagShowLogoutButton = true;
    //this.updateLoginFlag.emit(this.flagShowLogoutButton)
  }

  

}
