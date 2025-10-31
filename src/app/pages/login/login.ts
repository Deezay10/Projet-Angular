import { Component } from '@angular/core';
import {User} from './User';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {ServicesConnexion} from '../../services/services-connexion';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginResponse } from '../../services/services-connexion';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})



export class Login {
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(
    private authService: ServicesConnexion,
    private router: Router
  ) {}
  public user : User = new User()

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: LoginResponse) => {
        if (response.code === "200") {
          this.successMessage = "Connexion effectuée";
          this.errorMessage = "";
          localStorage.setItem('token', response.data);
          this.router.navigate(['/liste-articles']);
        } else {
          this.errorMessage = "E-mail/Mot de passe incorrects";
          this.successMessage = "";
        }
      },
      error: () => {
        this.errorMessage = "Erreur de connexion avec le serveur.";
        this.successMessage = "";
      }
    });
  }
}
