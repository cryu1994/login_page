import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') 
  // onSubmit(form: HTMLFormElement){
  //   console.log(form)
  // }
  user = {name: '', email: '', password: '', conf_password: ''};
  users = [];
  onSubmit(){
    this.users.push(this.user);
    this.user = {name: '', email: '', password: '', conf_password: ''};
    console.log(this.user)
  }
}
