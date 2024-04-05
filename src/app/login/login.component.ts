// import { Component, OnInit } from '@angular/core';
// import { Validators, FormControl, FormGroup } from '@angular/forms';
// import { AuthService } from '../Services/auth.service';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;

//   ngOnInit() {
//   this.loginForm = new FormGroup({
//     email: new FormControl('', Validators.required),
//     password: new FormControl('', Validators.required),
//   });
// }
//   value: string | undefined;

//   submitted = false;
//   passwordVisible!: boolean;

//   togglePasswordVisibility(): void {
//     this.passwordVisible = !this.passwordVisible;
//   }
//   email: string = '';
//   password: string = '';
//   errorMessage: string = '';
//   constructor(private authService: AuthService, private router: Router) {}
//   login() {
//     const result = this.authService.login(this.email, this.password);
//     if (result === true) {
//       this.router.navigate(['/']);
//     } else {
//       this.errorMessage = result as string;
//     }
//   }
// }



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
      password: ['', [Validators.required, Validators.minLength(6)]], // Example password validation
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
        this.router.navigate(['/']); // Navigate to home if login successful
      },
      (error) => {
        this.errorMessage = error; // Show error message if login fails
      }
    );
  }
}
