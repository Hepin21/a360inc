import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Updated import
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder, // Updated injection
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // Using FormBuilder to create FormGroup
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]], // Example password validation
    });
  }

  login() {
    // if (this.loginForm.invalid) {
    //   return;
    if (this.loginForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please enter valid credentials',
      });
      return;
    }

    const username = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(username, password).subscribe(
      () => {
        this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successfully',
      });
        this.router.navigate(['/home']); // Navigate to home if login successful
      },
      (error) => {
        // this.errorMessage = error; // Show error message if login fails
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Invalid username or password',
        });
      }
    );
  }
}
