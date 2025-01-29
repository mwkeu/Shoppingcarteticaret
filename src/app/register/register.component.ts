import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService:AuthService){}
  
    @Output() closeModalEvent = new EventEmitter<void>();
    @Output() registerSuccessEvent = new EventEmitter<void>();


    register(){
          localStorage.setItem('isAuthenticated','true');
         this.authService.login()
         this.registerSuccessEvent.emit();
    }

    closeRegisterModal()
    {
        this.closeModalEvent.emit()
    }


}