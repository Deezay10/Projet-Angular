import {Component, OnInit} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ServicesDetailArticle} from '../../services/services-detail-article';
import { ListArticles } from '../list-articles/list-articles';
import {Article} from '../../services/services-list-article';
import {ServicesListArticle} from '../../services/services-list-article';

@Component({
  selector: 'app-detail-article',
  imports: [
    NgClass,
    NgStyle,
    HttpClientModule,
  ],
  templateUrl: './detail-article.html',
  styleUrl: './detail-article.css'
})
export class DetailArticle implements OnInit {
  article!: Article;
  constructor(private activatedRoute: ActivatedRoute, private articleService: ServicesListArticle) {
  }

  ngOnInit () {
    const id = this.activatedRoute.snapshot.paramMap.get("id")!;

    if (id != null) {
      this.articleService.getArticleById(id).subscribe({
        next: (data) => this.article = data,
        error: (err) => console.error("Erreur getArticleById", err)
      });
    }
  }
}


