import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
formBuilder=inject(FormBuilder);
loginForm=this.formBuilder.group({
  email:['',[Validators.required]],
  password:['',[Validators.required]],
});

authService=inject(AuthService);
router=inject(Router);
login(){
 const value=this.loginForm.value;
  this.authService.login(value.email!, value.password!).subscribe((result:any)=>{
    console.log(result);
    localStorage.setItem('token',result.token);
    localStorage.setItem('user', JSON.stringify(result.user));
    this.router.navigateByUrl('/');
  })
}
}
