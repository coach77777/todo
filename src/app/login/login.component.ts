import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

username = 'craig'
password= ''
errorMessage = 'Invalid Credentials.'
invalidLogin = false

constructor(){
}

ngOnInit(){

}


handleLogin(){
// console.log(this.username);
if(this.username === 'craig' && this.password ==='puppy'){
this.invalidLogin = false
}else{
  this.invalidLogin = true

}
}
}
