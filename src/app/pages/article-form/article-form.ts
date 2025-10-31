import { Component,OnInit } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {ServicesArticleForm} from '../../services/services-article-form';
import{ DetailArticle } from '../detail-article/detail-article';
import {Router} from '@angular/router';
import {Article, ArticleResponse, ServicesListArticle} from '../../services/services-list-article';

@Component({
  selector: 'app-article-form',
  imports: [
    NgClass,
    NgStyle,
    HttpClientModule,
    DetailArticle,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './article-form.html',
  styleUrl: './article-form.css'
})
export class ArticleForm implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ServicesArticleForm
  ) {
  }

  article: Article = {
    id: '',
    title: '',
    desc: '',
    author: '',
    imgPath: ''
  };
  isEdit = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEdit = true;
      this.articleService.getArticleById(id).subscribe({
        next: (res) => {
          this.article = res.data;
        }
      });

    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.articleService.updateArticle(this.article.id,this.article).subscribe({
        next: () => this.router.navigate(['/liste-articles']),
      });
    } else {
      this.articleService.addArticle(this.article).subscribe({
        next: () => this.router.navigate(['/liste-articles']),
        error: (err) => console.error('Erreur ajout', err)
      });
    }
  }
}
