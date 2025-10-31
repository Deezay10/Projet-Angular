import { Component } from '@angular/core';
import {ServicesListArticle} from '../../services/services-list-article';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {routes} from '../../app.routes';

@Component({
  selector: 'app-list-articles',
  imports: [
    HttpClientModule,
    RouterModule
  ],
  templateUrl: './list-articles.html',
  styleUrl: './list-articles.css'
})


export class ListArticles {
  constructor(
    private articleServices: ServicesListArticle,
    private router: Router
  ) {}


  public articles = [
    {
      "id": "1",
      "title": "Premier article",
      "desc": "Contenu du premier article",
      "author": "Isaac",
      "imgPath": "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg"
    },
    {
      "id": "2",
      "title": "Deuxième article",
      "desc": "Contenu du deuxième article",
      "author": "Sanchez",
      "imgPath": "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg"
    },
    {
      "id": "3",
      "title": "Troisième article",
      "desc": "Contenu du troisième article",
      "author": "Toto",
      "imgPath": "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-653001154-e1691965000531.jpg"
    }
  ]

  supprimerArticle(id: string) {
    this.articles = this.articles.filter(article => article.id !== id);
  }

  goToAddArticle(): void {
    this.router.navigate(['/detail-article/new']);
  }

  protected readonly routes = routes;
  protected readonly Router = Router;
}
