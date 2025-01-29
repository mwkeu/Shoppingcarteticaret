import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private authService:AuthService) { }

    @Output() closeModalEvent = new EventEmitter<void>();
    @Output() openRegisterEvent = new EventEmitter<void>();
    @Output() loginSuccessEvent = new EventEmitter<void>();
  
    login()
    {       
         localStorage.setItem('isAuthenticated','true')
         this.authService.login();
        this.loginSuccessEvent.emit()
      }
   
    closeLoginModal() {
       this.closeModalEvent.emit();
    }
  
    openRegister(){
     this.openRegisterEvent.emit();
   }

}