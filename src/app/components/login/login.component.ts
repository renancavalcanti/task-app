import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  submit(){
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => console.log(res),
      error: (res) => alert(res.error.error)
    })
  }
}
