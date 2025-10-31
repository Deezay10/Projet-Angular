import { Component } from '@angular/core';
import {User} from '../login/User';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mot-de-passe-oublie',
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './mot-de-passe-oublie.html',
  styleUrl: './mot-de-passe-oublie.css'
})
export class MotDePasseOublie {
  user: User = {
    email: '',
    password: ''
  };

  confirmPassword: string = '';
  message: string = '';
  apiUrl = "http://localhost:3000/reset-password";

  constructor(private http: HttpClient, private router: Router) {
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    if (this.user.password !== this.confirmPassword) {
      this.message = "Les mots de passe ne correspondent pas";
      return;
    }

    this.http.post(this.apiUrl, this.user).subscribe({
      next: (res: any) => {
        this.message = res.message || "Mot de passe réinitialisé avec succès ! : ";
        this.user.password = res.data; // ✅ on récupère le mot de passe retourné par l'API
      },
      error: (err) => {
        console.error('Erreur reset', err);
        this.message = "Erreur lors de la réinitialisation du mot de passe.";
      }
    });
  }
}
