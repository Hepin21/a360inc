import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    value: string | undefined;

    loginForm!: FormGroup;
    
    submitted = false;
    passwordVisible!: boolean;
    constructor(private authService: AuthService, private router: Router) {}

    togglePasswordVisibility(): void {
        this.passwordVisible = !this.passwordVisible;
      }
    
    // ngOnInit() {
    //     this.loginForm = new FormGroup({
    //         'login': new FormControl('', Validators.required),
    //         'password': new FormControl('', Validators.required)
    //     });
    // }
    
    // onSubmit() { 
    //     this.submitted = true;
    //     alert(JSON.stringify(this.loginForm.value));
    // }

    form = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
      });

    submitForm() {
        if (this.loginForm.invalid) {
          return;
        }
    
        this.authService
          .login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
          .subscribe((response) => {
            this.router.navigate(['/']);
          });
      }

}