import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForms!: FormGroup;
  ngOnInit() {
    this.registrationForms = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  // firstName: string = '';
  // lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  // role: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  // register(registrationForm: NgForm) {
  //   if (this.password === this.confirmPassword) {
  //     try {
  //       this.authService.register(this.firstName, this.lastName, this.email,this.password);
  //       alert('Registration successful');
  //       this.router.navigate(['/login']);
  //     } catch (error:any) {
  //       alert(error.message);
  //     }
  //   } else {
  //     alert('Passwords do not match');
  //     registrationForm.reset();
  //   }
  // }
  register() {
    if (this.registrationForms.valid) {
      const { c_password, email, password, confirmPassword } = this.registrationForms.value;
      if (password === confirmPassword) {
        try {
          // this.authService.register( c_password, email, password); // Include all four arguments
          alert('Registration successful');
          this.router.navigate(['/login']);
        } catch (error: any) {
          alert(error.message);
        }
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Please fill in all required fields');
    }
  }  
  
}
