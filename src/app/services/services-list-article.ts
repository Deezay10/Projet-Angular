import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface Article {
  id: string;
  title: string;
  desc: string;
  author: string;
  imgPath: string;
}

export interface ArticleResponse {
  code: string;
  message: string;
  data: Article;
}

interface ApiResponse<T> {
  code: string;
  message: string;
  data: T;
}


@Injectable({
  providedIn: 'any'
})
export class ServicesListArticle {

  private apiUrl = 'http://localhost:3000/articles';

  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  getArticleById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.data) // ← on retourne directement l'article
    );
  }
}

