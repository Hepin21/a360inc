import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Updated import
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder, // Updated injection
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({ // Using FormBuilder to create FormGroup
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(0)]], // Example password validation
    });
  }

  togglePasswordVisibility(): void {
    // Implement password visibility toggle if needed
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(username, password).subscribe(
      () => {
        this.router.navigate(['/home']); // Navigate to home if login successful
      },
      (error) => {
        this.errorMessage = error; // Show error message if login fails
      }
    );
  }
}
