import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  submit(){
    this.auth.signup(this.name, this.email, this.password).subscribe({
      next: (res) => this.router.navigate(['/login']),
      error: (res) => alert(res.error.error)
    })
  }
}
